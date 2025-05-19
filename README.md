from pathlib import Path

readme_content = """
# 🛍️ E-Commerce System Using NestJS Microservices

This project is a microservice-based e-commerce system built using:

- ✅ **NestJS** (Product, Customer, Order microservices)
- 🐰 **RabbitMQ** for inter-service messaging
- 🐘 **PostgreSQL** as the database
- ⚛️ **Next.js 14** with **App Router** + **Tailwind CSS** for frontend
- 🛒 Cart with context, real-time updates, and checkout flow

---

## 📁 Project Structure

project-root/
├── customer-ms/ # Customer Microservice
├── product-order-ms/ # Product & Order Microservice
├── frontend/ # Next.js App Router Frontend
└── README.md


---

## ⚙️ Prerequisites

- Node.js `v18+`
- PostgreSQL installed and running
- RabbitMQ running (default port `5672`)
- pnpm/npm/yarn (your choice)

---

## 🚀 Setup Instructions

### 1. Clone the Repo

git clone https://github.com/Avhinaw/BillionIdeaAssign.git


## 2 Set Up PostgreSQL Databases
Create two separate PostgreSQL databases:

customers_db

products_orders_db

Or use one DB with different tables — as you’ve done locally.

## 🐇 Start RabbitMQ

## 📦 Install Dependencies

npm i

## ✨ Features

🧱 Microservices
Product Service → Add & view products (with images)

Customer Service → Add, view, delete customers

Order Service → Create & view orders

🐇 RabbitMQ Messaging
Events: customer_order_placed

Order microservice emits order placed event

Customer microservice listens and logs

💻 Frontend (Next.js + Tailwind)
/ → Home page with hero + "Shop Now"

/products → View and add to cart

/checkout → Cart, select customer, place order

/orders → Orders grouped by customer

/customers → Add/delete/view customers

Global toast notifications (react-hot-toast)

Cart powered by React Context
