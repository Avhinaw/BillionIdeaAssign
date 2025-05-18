// src/components/ProductCard.tsx

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <p className="text-green-600 font-bold text-lg">₹{product.price}</p>
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
        Add to Cart
      </button>
    </div>
  );
}
