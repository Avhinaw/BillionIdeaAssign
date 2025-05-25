"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-3 px-5 mb-2 border-b-1 border-gray-300 flex justify-between w-screen">
      <div className="flex gap-5 items-center">
        <Link style={linkStyle(pathname === "/")} href="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <Link style={linkStyle(pathname === "/products")} href="/products">
          Products
        </Link>

        <Link style={linkStyle(pathname === "/orders")} href="/orders">
          Orders
        </Link>
        <Link style={linkStyle(pathname === "/customers")} href="/customers">
          Customers
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-xl py-2 px-8 bg-gray-200 text-[#e92933]"
          />
          <div className="absolute top-3 right-58 text-[#e92933]">
            <IoSearchOutline />
          </div>
        </div>
        <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-lg">
          <FaRegHeart />
        </div>
        <Link style={linkStyle(pathname === "/checkout")} href="/checkout">
          <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-lg">
            <IoBagHandleOutline />
          </div>
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = (active: boolean): React.CSSProperties => ({
  color: active ? "#e92933" : "black",
});
