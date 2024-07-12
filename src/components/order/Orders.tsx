'use client'

import axios from 'axios';
import Loader from 'components/Loader/Loader';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { TbTruckDelivery } from 'react-icons/tb';


function Orders() {
  const [orders, setOrders] = useState<any[]>([])
  const [orderLoading, setorderLoading] = useState(false)
  const [searchText, setSearchText] = useState('');
  const [filteredOrders, setFilteredOrders] = useState<any[]>([]);

const deliveryCreateHandler =async()=>{
  let tokenbody = {
    client_id : process.env.NEXT_PUBLIC_fenix_fenix_client_id,
    client_secret : process.env.NEXT_PUBLIC_fenix_fenix_client_secret,
    grant_type : process.env.NEXT_PUBLIC_fenix_grant_type
  }
let authentication_response = await axios.post(`${process.env.NEXT_PUBLIC_fenix_baseUrl}/user/token`,tokenbody);

console.log(authentication_response, "authentication_response")

}

const columns = [
  {
    title: 'Order Id',
    dataIndex: 'order_id',
    key: 'order_id',
    searchable: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    searchable: true,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    searchable: true,
  },
  {
    title: 'Name',
    dataIndex: 'first_name',
    key: 'name',
    searchable: true,
    render: (text: any, record: any) => {
      const Name = record.first_name + " " + record.last_name;
      return <span>{Name}</span>;
    },
  },
  {
    title: 'Payment Status',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
    searchable: true,
    render: (text: any, record: any) => {
      const paymentStatus = record.paymentStatus ? "true" : "false";
      return <span>{paymentStatus}</span>;
    },
  },
  {
    title: 'Amount',
    dataIndex: 'amount_cents',
    key: 'amount_cents',
    searchable: true,
    render: (text: any, record: any) => {
      const Transaction = record.amount_cents ? (record.amount_cents / 100).toFixed(2) : "Amount Available";
      return <span>{Transaction}</span>;
    },
  },
  {
    title: 'Transaction ID',
    dataIndex: 'transactionId',
    key: 'transactionId',
    searchable: true,
    render: (text: any, record: any) => {
      const Transaction = record.transactionId ? record.transactionId : "ID Not Available";
      return <span>{Transaction}</span>;
    },
  },
  {
    title: 'Creation Date',
    dataIndex: 'createdAt',
    key: 'date',
    searchable: true,
    render: (text: any, record: any) => {
      const createdAt = new Date(record.createdAt);
      const formattedDate = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, '0')}-${String(createdAt.getDate()).padStart(2, '0')}`;
      return <span>{formattedDate}</span>;
    },
  },
  {
    title: 'Creation Time',
    dataIndex: 'createdAt',
    key: 'time',
    searchable: false, 
    render: (text: any, record: any) => {
      const createdAt = new Date(record.createdAt);
      const formattedTime = `${String(createdAt.getHours()).padStart(2, '0')}:${String(createdAt.getMinutes()).padStart(2, '0')}`;
      return <span>{formattedTime}</span>;
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
        formattedDate = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, '0')}-${String(createdAt.getDate()).padStart(2, '0')}`;
      } else {
        formattedDate = "Transaction Not Available";
      }
      return <span>{formattedDate}</span>;
    },
  },
  {
    title: 'Create Delivery Order',
    dataIndex: 'transactionDate',
    key: 'transactionDate',
    searchable: false,
    render: (text: any, record: any) => {
      return <span><TbTruckDelivery onClick={deliveryCreateHandler} className='cursor-pointer text-cyan-500' size={30} /></span>;
    },
  },
];


const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.toLowerCase();
  setSearchText(value);
  
  const filteredData = orders.filter(order => {
    return columns.some(column => {
      if (column.searchable) {
        const dataIndex = column.dataIndex;
        const columnValue = order[dataIndex];

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

  setFilteredOrders(filteredData);
};



  const getAllOrder = async () => {
    const token = localStorage.getItem('2guysAdminToken');
    if (!token) return;

    try {
      setorderLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/getAllorders`, {
        headers: {
          token: token
        }
      });
      let filteredArray =    response.data.Orders && response.data.Orders.filter((item:any)=>item.paymentStatus).reverse()

setFilteredOrders(filteredArray);
      setOrders(filteredArray);
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setorderLoading(false);
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
          {/* {filteredOrders && filteredOrders.length > 0 ? ( */}


            <Table
              className="lg:overfow-x-auto overflow-auto border-slate-100"
              dataSource={filteredOrders}
              columns={columns}
              pagination={false}
              rowKey="_id"
            />
          {/* ) : (
            'No Orders found'
          )} */}
        </>
      )}
    </div>
  );
}

export default ProtectedRoute(Orders);