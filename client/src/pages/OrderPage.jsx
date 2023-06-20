import React, { useEffect } from 'react';

const OrderPage = () => {
  useEffect(() => {
    const orderData = [
      {
        orderId: '#00123',
        date: '2023-06-15',
        items: 3,
        total: 99.99,
        status: 'Shipped',
      },
      {
        orderId: '#00122',
        date: '2023-06-12',
        items: 1,
        total: 49.99,
        status: 'Delivered',
      },
    ];

    const tableBody = document.querySelector('#order-table tbody');

    orderData.forEach((order, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.orderId}</td>
        <td>${order.date}</td>
        <td>${order.items} item(s)</td>
        <td>$${order.total.toFixed(2)}</td>
        <td>${order.status}</td>
      `;
      row.classList.add(
        `bg-${index % 2 === 0 ? 'blue' : 'green'}-200`,
        'p-4',
        'border-b',
        'border-gray-300',
        'rounded-lg',
        'shadow-md',
        'my-4'
      );
      tableBody.appendChild(row);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-4">Order History</h1>
      <div className="w-3/4">
        <table id="order-table" className="w-full">
          <thead>
            <tr>
              <th className="text-left">Order ID</th>
              <th className="text-left">Date</th>
              <th className="text-left">Items</th>
              <th className="text-left">Total</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
