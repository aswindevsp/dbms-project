import React, { useEffect, useState } from 'react';
import { userOrder } from '../api/userOrder';

const OrderPage = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await userOrder();
        setOrderData(response.orders);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrderData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-4">Order History</h1>
      <div className="w-3/4">
        <table id="order-table" className="w-full">
          <thead>
            <tr>
              <th className="text-left">Order ID</th>
              <th className="text-left">Title</th>
              <th className="text-left">Ordered Date</th>
              <th className="text-left">Total Price</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr
                key={order.orderid}
                className={`bg-${index % 2 === 0 ? 'blue' : 'green'}-200 p-4 border-b border-gray-300 rounded-lg shadow-md my-4`}
              >
                <td>{order.orderid}</td>
                <td>{order.title}</td>
                <td>{new Date(order.orderdate).toLocaleDateString()}</td>
                <td>${parseFloat(order.totalamount).toFixed(2)}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
