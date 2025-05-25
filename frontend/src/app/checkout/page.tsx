'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContent';
import cards from 'razorpay/dist/types/cards';
import Loading from '../components/Loading';

interface Customer {
  id: number;
  name: string;
}

export default function CheckoutPage() {
  const { cart, clearCart, removeFromCart } = useCart();
  const [customerId, setCustomerId] = useState('');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    fetch('http://localhost:3001/customers')
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => toast.error('❌ Failed to load customers'));
  }, []);

  const handleCheckout = async () => {
    if (!customerId) {
      toast.error('⚠️ Please select a customer');
      return;
    }

    if (cart.length === 0) {
      toast.error('⚠️ Cart is empty');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://localhost:3002/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: Number(customerId),
          productId: cart[0].id,
          quantity: cart[0].quantity,
          totalPrice: cart[0].price * cart[0].quantity,
        }),
      });

      if (!res.ok) throw new Error('Order failed');

      toast.success('✅ Order placed successfully!');
      setSuccessMsg('Order placed!');
      clearCart();
    } catch (error) {
      console.error(error);
      toast.error('❌ Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <>
      {cart.length === 0 ? (<h1 className="text-2xl font-bold mb-6">Checkout</h1>):(<h1 className="text-xl font-bold mb-6">Checkout ({cart.length}) </h1>)}
</>
      {cart.length === 0 ? (
        <h2 className='w-full h-[70vh] flex items-center justify-center text-3xl font-bold'>Cart Empty</h2>
      ) : (
        <>
          <div className="space-y-4 mb-6 text-black">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl shadow-sm bg-white flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price} × {item.quantity}</p>
                  <p className="font-bold text-green-600">
                    Total: ₹{item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.success(`🗑️ Removed ${item.name} from cart`);
                  }}
                  className="text-sm bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Customer selection */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Select Customer:</label>
            <select
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="w-full bg-gray-200 p-4 rounded-xl"
            >
              <option className='text-black' value="">Choose Customer</option>
              {customers.map((c) => (
                <option className='text-black' key={c.id} value={c.id}>
                  {c.name} (ID: {c.id})
                </option>
              ))}
            </select>
          </div>

          <div className="text-xl font-bold mb-4">
            Grand Total: ₹{Math.floor(totalAmount)}
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="bg-[#e8262f] self-end px-5 py-2 text-sm text-white rounded-xl hover:bg-[#ea2832d1] transition-all duration-300r"
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>

          {successMsg && <p className="mt-4 text-green-600">{successMsg}</p>}
        </>
      )}
    </div>
  );
}
