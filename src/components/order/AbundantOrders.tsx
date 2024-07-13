'use client'

import axios from 'axios';
import Loader from 'components/Loader/Loader';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { TbTruckDelivery } from 'react-icons/tb';

function AbundantOrders() {
    const [orders, setOrders] = useState<any[]>([])
    const [orderLoading, setorderLoading] = useState(false)
  const [searchText, setSearchText] = useState('');
  const [filteredOrders, setFilteredOrders] = useState<any[]>([]);

  
    const columns = [
      {
        title: 'Order Id',
        dataIndex: 'order_id',
        key: 'order_id',
        searchable :true
  
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        searchable :true

  
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        searchable :true

  
      },
      {
        title: 'Name',
        dataIndex: 'first_name',
        key: 'name',
        searchable :true,

        render: (text: any, record: any) => {
          const Name = record.first_name + " " + record.last_name
  
          return <span>{Name}</span>;
        },
      },

      {
        title: 'Checkout Status',
        dataIndex: 'checkout',
        key: 'checkout',
        searchable :true,
        render: (text: any, record: any) => {
          const checkout = record.checkout ? "true" : "false"
  
          return <span>{checkout}</span>;
        },
  
      },
  
  
      {
        title: 'Amount ',
        dataIndex: 'amount_cents',
        key: 'amount_cents',
        searchable :true,
        render: (text: any, record: any) => {
          let Transaction = record.amount_cents ? (record.amount_cents / 100).toFixed(2) : "Amount Available"
  
          const amountInDollars = (record.amount / 100).toFixed(2);
  
          return <span>{Transaction}</span>;
        },
      },
      {
        title: 'Transaction ID',
        dataIndex: 'transactionId',
        key: 'transactionId',
        searchable :true,
        render: (text: any, record: any) => {
          let Transaction = record.transactionId ? record.transactionId : "ID Not Available"
  
          return <span>{Transaction}</span>;
        },
      },
      {
        title: 'Creation Date',
        dataIndex: 'createdAt',
        key: 'date',
        searchable :false,
        render: (text: any, record: any) => {
          const createdAt = new Date(record.createdAt);
          const formattedDate = `${createdAt.getFullYear()}-${String(
            createdAt.getMonth() + 1,
          ).padStart(2, '0')}-${String(createdAt.getDate()).padStart(2, '0')}`;
          return <span>{formattedDate}</span>;
        },
      },
      {
        title: 'Creation Time',
        dataIndex: 'createdAt',
        key: 'time',
        searchable :false,
        render: (text: any, record: any) => {
          const createdAt = new Date(record.createdAt);
          const formattedTime = `${String(createdAt.getHours()).padStart(
            2,
            '0',
          )}:${String(createdAt.getMinutes()).padStart(2, '0')}
        
              `;
          return <span>{formattedTime}</span>;
        },
      },

  
  
    ];
  
  
    const getAllOrder = async () => {
      const token = localStorage.getItem('2guysAdminToken');
      if (!token) return  
      try {
        setorderLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/getAllorders`, {
          headers: {
            token: token
          }
        }
        );
     let filteredArray =    response.data.Orders && response.data.Orders.filter((item:any)=>item.checkout).reverse()
        setOrders(filteredArray);
      setFilteredOrders(filteredArray);

      
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setorderLoading(false);
      }
  
    }
    useEffect(() => {
      getAllOrder()
    }, [])


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toLowerCase();
      setSearchText(value);
      
      const filteredData = orders.filter(order => {
        return columns.some((column:any) => {
          if (column.searchable) {
            const dataIndex = column.dataIndex;
            const columnValue = order[dataIndex];
    console.log(columnValue, "columnValue")
            if (columnValue) {
              if (typeof columnValue === 'string' || typeof columnValue === 'number'|| typeof columnValue === 'boolean') {
                return columnValue.toString().toLowerCase().includes(value);
              } else if (columnValue instanceof Date) {
                return columnValue.toLocaleDateString().toLowerCase().includes(value) || 
                       columnValue.toLocaleTimeString().toLowerCase().includes(value);
              }
            }
          }
          return false;
        });
      });
      console.log(filteredData)
    
      setFilteredOrders(filteredData);
    };
    
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
              <p>Abundant orders</p>
            </div>
          </div>
            {orders && orders.length > 0 ? (
              <Table
                className="lg:overfow-x-auto overflow-auto border-slate-100"
                dataSource={filteredOrders}
                columns={columns}
                pagination={false}
                rowKey="_id"
              />
            ) : (
              'No Orders found found'
            )}
          </>
        )}
      </div>
    )
}

export default AbundantOrders