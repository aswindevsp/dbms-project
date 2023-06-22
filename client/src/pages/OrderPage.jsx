import React, { useEffect, useState } from 'react';
import { userOrder } from '../api/userOrder';
import Navbar from '../components/Navbar';
import testImage from '../assets/images/test.jpeg';


const OrderPage = () => {
  const [orderData, setOrderData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredOrders = orderData.filter((order) =>
    order.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCancelOrder = (orderId) => {
    // TODO: Implement cancel order functionality
    console.log(`Cancel order with ID ${orderId}`);
  };

  return (
    // <div className="flex flex-col justify-p items-center h-screen">
      <div className="flex flex-col items-center justify-center  my-6">
      <Navbar />
      <div className="w-3/4 mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Orders</h1>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type="text"
            placeholder="Search all orders"
            className="w-full px-2 py-1 mr-3 border border-gray-400 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">
            Search Orders
          </button>
        </div>
        <div className="flex justify-between mb-2">
          <div className="text-gray-600">Total Orders: {filteredOrders.length}</div>
          <div className="text-gray-600">
            Pending: {filteredOrders.filter((order) => order.status === 'Pending').length}
          </div>
          <div className="text-gray-600">
            Shipped: {filteredOrders.filter((order) => order.status === 'Shipped').length}
          </div>
          <div className="text-gray-600">
            Delivered: {filteredOrders.filter((order) => order.status === 'Delivered').length}
          </div>
        </div>
      </div>
      <div className="w-3/4">
        {filteredOrders.map((order) => (
          <div
            key={order.orderid}
            className="flex items-center border border-gray-400 rounded-md p-4 mb-4"
          >
            <div className="w-1/5">
            <img src={testImage} alt="Test Image" className="w-full h-auto" />

            </div>
            <div className="w-2/5 ml-4">
              <h2 className="text-lg font-bold">{order.title}</h2>
              <p className="text-gray-600">{new Date(order.orderdate).toLocaleDateString()}</p>
            </div>
            <div className="w-1/5 text-right">
              <p className="text-gray-600">${parseFloat(order.totalamount).toFixed(2)}</p>
              <p className="text-gray-600">{order.status}</p>
            </div>
            <div className="w-1/5 text-right">
              {order.status === 'Pending' && (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={() => handleCancelOrder(order.orderid)}
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;