'use client';

import axios from 'axios';
import Loader from 'components/Loader/Loader';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { useEffect, useState } from 'react';
import { Table, Modal, Button } from 'antd';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuView } from 'react-icons/lu';
import Image from 'next/image';
import qs from 'qs';
function Orders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredOrders, setFilteredOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const deliveryCreateHandler = async () => {
    const data = qs.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.NEXT_PUBLIC_FENIX_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_FENIX_CLIENT_SECRET,
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://partner.stg.fenix.life/user/token',
      headers: {},
      data: data,
    };

    try {
      const response = await axios.request(config);
      alert('Bhai kuch to chal raha hai!!!');
      console.log(JSON.stringify(response.data));
    } catch (error) {
      alert('Bhai tm se na ho pai ga');
      console.log(error);
    }
  };

  const columns = [
    {
      title: 'Order Id',
      dataIndex: 'order_id',
      key: 'order_id',
      searchable: true,
    },
    {
      title: 'Name',
      dataIndex: 'first_name',
      key: 'name',
      searchable: true,
      render: (text: any, record: any) => {
        const Name = record.first_name + ' ' + record.last_name;
        return <span>{Name}</span>;
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      searchable: true,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone',
      searchable: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      searchable: true,
    },

    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      searchable: true,
      render: (text: any, record: any) => {
        const paymentStatus = record.paymentStatus ? 'true' : 'false';
        return <span>{paymentStatus}</span>;
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount_cents',
      key: 'amount_cents',
      searchable: true,
      render: (text: any, record: any) => {
        const Transaction = record.amount_cents
          ? (record.amount_cents / 100).toFixed(2)
          : 'Amount Available';
        return <span>{Transaction}</span>;
      },
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      searchable: true,
      render: (text: any, record: any) => {
        const Transaction = record.transactionId
          ? record.transactionId
          : 'ID Not Available';
        return <span>{Transaction}</span>;
      },
    },
    {
      title: 'Payment Date',
      dataIndex: 'transactionDate',
      key: 'date',
      searchable: true,
      render: (text: any, record: any) => {
        let formattedDate;
        if (record.transactionDate) {
          const createdAt = new Date(record.transactionDate);
          formattedDate = createdAt.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          });
        } else {
          formattedDate = 'Transaction Not Available';
        }
        return <span>{formattedDate}</span>;
      },
    },
    {
      title: 'View Products',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      searchable: false,
      render: (text: any, record: any) => {
        return (
          <span className="flex justify-center">
            <LuView
              onClick={() => viewOrderHandler(record)}
              className="cursor-pointer text-green-500"
              size={30}
            />
          </span>
        );
      },
    },
    {
      title: 'Create Delivery',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      searchable: false,
      render: (text: any, record: any) => {
        return (
          <span className="flex justify-center">
            <TbTruckDelivery
              onClick={deliveryCreateHandler}
              className="cursor-pointer text-cyan-500"
              size={30}
            />
          </span>
        );
      },
    },
  ];

  const viewOrderHandler = (order: any) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filteredData = orders.filter((order) => {
      return columns.some((column) => {
        if (column.searchable) {
          const dataIndex = column.dataIndex;
          const columnValue = order[dataIndex];

          if (columnValue) {
            if (
              typeof columnValue === 'string' ||
              typeof columnValue === 'number' ||
              typeof columnValue === 'boolean'
            ) {
              return columnValue.toString().toLowerCase().includes(value);
            } else if (columnValue instanceof Date) {
              return (
                columnValue
                  .toLocaleDateString()
                  .toLowerCase()
                  .includes(value) ||
                columnValue.toLocaleTimeString().toLowerCase().includes(value)
              );
            }
          }
        }
        return false;
      });
    });

    setFilteredOrders(filteredData);
  };

  const getAllOrder = async () => {
    const token = localStorage.getItem('2guysAdminToken');
    if (!token) return;

    try {
      setOrderLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/getAllorders`,
        {
          headers: {
            token: token,
          },
        },
      );
      let filteredArray =
        response.data.Orders &&
        response.data.Orders.filter(
          (item: any) => item.paymentStatus,
        ).reverse();

      setFilteredOrders(filteredArray);
      setOrders(filteredArray);
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setOrderLoading(false);
    }
  };

  useEffect(() => {
    getAllOrder();
  }, []);

  return (
    <div>
      {orderLoading ? (
        <div className="flex justify-center mt-10">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-4 items-center flex-wrap">
            <input
              className="lg:p-3 p-2 block outline-none border rounded-md border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              type="search"
              placeholder="Search Orders"
              value={searchText}
              onChange={handleSearch}
            />
            <div>
              <p>Orders</p>
            </div>
          </div>

          <Table
            className="lg:overfow-x-auto overflow-auto border-slate-100"
            dataSource={filteredOrders}
            columns={columns}
            pagination={false}
            rowKey="_id"
          />

          <Modal
            title="Product Details"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[
              <Button key="close" onClick={handleCancel}>
                Close
              </Button>,
            ]}
          >
            {selectedOrder?.orderedProductDetails &&
            selectedOrder.orderedProductDetails.length > 0 ? (
              <ul className="py-2">
                {selectedOrder.orderedProductDetails.map((product: any) => (
                  <li key={product._id} className="mb-3 flex bg-red">
                    {product.posterImageUrl &&
                    product.posterImageUrl.imageUrl ? (
                      <Image
                        src={product.posterImageUrl.imageUrl}
                        width={100}
                        height={100}
                        alt="Product"
                      />
                    ) : null}
                    <div>
                      <p>
                        {' '}
                        Name: <span className="font-bold">{product.name}</span>
                      </p>
                      <p>
                        Color:
                        <span
                          style={{ backgroundColor: `#${product.color}` }}
                          className="ml-2 inline-block h-4 w-4 rounded-full border border-gray-300"
                        />
                      </p>
                      <p>Count: {product.Count}</p>
                      <p>Total Price: {product.totalPrice} AED</p>
                    </div>
                    <hr className="bg-red-400 h-5" />
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products available for this order.</p>
            )}
          </Modal>
        </>
      )}
    </div>
  );
}

export default ProtectedRoute(Orders);
