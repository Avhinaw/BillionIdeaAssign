'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <section className="flex items-center justify-center h-[80vh] bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to OneBillionCart</h1>
        <p className="text-lg sm:text-xl mb-6">
          Your one-stop shop for awesome tech and trendy products.
        </p>
        <button
          onClick={() => router.push('/products')}
          className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition"
        >
          🛍️ Shop Now
        </button>
      </div>
    </section>
  );
}