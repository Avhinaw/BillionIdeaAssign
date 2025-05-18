// src/app/products/page.tsx
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
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
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

