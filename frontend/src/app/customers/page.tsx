'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';

interface Customer {
  id: number;
  name: string;
  email: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  // 🔁 Fetch customers
  const fetchCustomers = async () => {
    try {
      const res = await fetch('http://localhost:3001/customers');
      const data = await res.json();
      setCustomers(data);
    } catch (err) {
      toast.error('❌ Failed to fetch customers:');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  //  Add customer
  const handleAddCustomer = async () => {
    if (!name || !email) {
      toast.error('Please enter name and email');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error('Failed to add customer');

      setName('');
      setEmail('');
      fetchCustomers();
      toast.success('Customer added');
    } catch (err) {
      console.error(err);
      toast.error('❌ Error adding customer');
    }
  };

  // Delete customer
  const handleDeleteCustomer = async (id: number) => {

    try {
      const res = await fetch(`http://localhost:3001/customers/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');

      toast.success('Customer deleted');
      fetchCustomers();
    } catch (err) {
      console.error(err);
      toast.error('❌ Failed to delete customer');
    }
  };

  return (
    <div className="w-screen min-h-screen mx-auto py-8 bg-white text-black px-36">
      <div className='flex flex-col gap-2'>
        <h2 className='capitalize text-2xl my-5 font-bold'>add new customer</h2>
        <label className='text-sm mx-1' htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          className="w-1/3 block border p-3 mb-2 rounded-xl outline-none border-gray-300 text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className='text-sm mx-1' htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-1/3 block border p-3 mb-2 rounded-xl outline-none border-gray-300 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleAddCustomer}
          className="bg-[#e8262f] self-end px-5 py-2 text-sm text-white rounded-2xl hover:bg-[#ea2832d1] transition-all duration-300"
        >
          Add Customer
        </button>
      </div>
      <div>
        <h2 className='capitalize text-xl my-5 font-bold'>existing customers</h2>
        <div className='grid grid-cols-3 gap-3'>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Action</h3>
        {loading ? (
          <Loading />
        ) : customers.length === 0 ? (
          <p>No customers found.</p>
        ) : (customers.map((c) => (
          <>
              <p className='capitalize'>{c.name}</p>
              <p className='text-gray-500'>{c.email}</p>
              <p className='text-[#ea2832d1] cursor-pointer' onClick={() => handleDeleteCustomer(c.id)}>Remove</p>
            </>
        )))}
        </div>
      </div>
    </div>
  );
}
