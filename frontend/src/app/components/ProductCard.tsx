'use client';
// src/components/ProductCard.tsx

import { useCart } from "../context/CartContent";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}



export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="w-[250px] h-[350px] bg-white border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img className="w-56 h-36 object-center" src={product.image} alt={product.name} />
      <div className="h-46 flex flex-col justify-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <p className="text-green-600 font-bold text-lg">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Add to Cart
      </button>
      </div>
      
    </div>
  );
}
