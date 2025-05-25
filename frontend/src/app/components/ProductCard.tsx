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
    <div className="w-[230px] h-[350px] rounded-xl p-4 hover:shadow-lg transition">
      <div className="bg-gray-400">
      <img className="w-56 h-36 object-center" src={product.image} alt={product.name} />
      </div>
      <div className="h-46 flex flex-col justify-center">
      <h2 className="text-md font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <p className="text-green-600 font-bold text-md">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-[#e92933] text-white py-2 rounded hover:bg-[#ea2832d1] transition-all duration-300"
      >
        Add to Cart
      </button>
      </div>
      
    </div>
  );
}
