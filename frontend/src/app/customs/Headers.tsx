'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='text-white p-5 flex items-center justify-end gap-10 text-2xl'>
      <Link style={linkStyle(pathname === '/')} href="/">Home</Link>
      <Link style={linkStyle(pathname === '/products')} href="/products">Products</Link>
      <Link style={linkStyle(pathname === '/checkout')} href="/checkout">Checkout</Link>
      <Link style={linkStyle(pathname === '/orders')} href="/orders">Orders</Link>
      <Link style={linkStyle(pathname === '/customers')} href="/customers">Customers</Link>
    </nav>
  );
}


const linkStyle = (active: boolean): React.CSSProperties => ({
  fontWeight: active ? 'bold' : 'normal',
  textDecoration: active ? 'underline' : 'none',
});
