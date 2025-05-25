'use client';

import { useEffect, useState } from 'react';

interface Order {
  id: number;
  productId: number;
  customerId: number;
  quantity: number;
  totalPrice: number;
}

interface Customer {
  id: number;
  name: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [ordersRes, customersRes] = await Promise.all([
          fetch('http://localhost:3002/orders'),
          fetch('http://localhost:3001/customers'),
        ]);

        const ordersData = await ordersRes.json();
        const customersData = await customersRes.json();

        setOrders(ordersData);
        setCustomers(customersData);
      } catch (error) {
        console.error('❌ Failed to load orders or customers:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // 🧠 Group orders by customerId
  const groupedOrders: { [customerId: number]: Order[] } = {};
  orders.forEach((order) => {
    if (!groupedOrders[order.customerId]) {
      groupedOrders[order.customerId] = [];
    }
    groupedOrders[order.customerId].push(order);
  });

  const getCustomerName = (id: number) => {
    const customer = customers.find((c) => c.id === id);
    return customer ? customer.name : `Unknown (ID: ${id})`;
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">📦 All Orders by Customer</h1>

      {loading ? (
        <p>Loading...</p>
      ) : Object.keys(groupedOrders).length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-8 text-black">
          {Object.entries(groupedOrders).map(([customerId, customerOrders]) => (
            <div key={customerId} className="border rounded-lg bg-white shadow p-4">
              <h2 className="text-lg font-bold mb-2">
                👤 {getCustomerName(Number(customerId))} (ID: {customerId})
              </h2>

              <ul className="space-y-3">
                {customerOrders.map((order) => (
                  <li
                    key={order.id}
                    className="border p-3 rounded shadow-sm bg-gray-50"
                  >
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Product ID:</strong> {order.productId}</p>
                    <p><strong>Quantity:</strong> {order.quantity}</p>
                    <p className="text-green-600 font-semibold">
                      Total: ₹{order.totalPrice}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
