import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./customs/Headers";
import { CartProvider } from "./context/CartContent";
import { Toaster } from "react-hot-toast";
import Footer from "./customs/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: 'Microservice App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        <Navbar />
        {children}
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
