// src/app/products/page.tsx
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

import ProductCard from "../components/ProductCard";


async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3002/products", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="w-screen min-w-screen px-32">
      <h1 className="text-2xl font-bold capitalize py-5">featured products</h1>
      <div className="grid grid-cols-5 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
      
    </div>
  );
}

