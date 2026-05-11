# 🛒 ApnaStore
 
> A full-stack e-commerce web application built with the MERN stack, featuring dual payment gateways, cloud image management, and secure JWT authentication.
 
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
 
---
 
## 📌 Table of Contents
 
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)
- [API Overview](#-api-overview)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
---
 
## ✨ Features
 
- 🔐 **Secure Authentication** — JWT-based login/signup with bcrypt password hashing
- 🛍️ **Full Shopping Experience** — Browse, filter, add to cart, and place orders
- 👨‍💼 **Admin Dashboard** — Manage products, orders, and users from a dedicated panel
- 💳 **Dual Payment Gateway** — Pay via **Stripe** or **Razorpay** (INR supported)
- 🖼️ **Cloud Image Uploads** — Product images stored and served via **Cloudinary**
- 📱 **Responsive UI** — Clean, mobile-first design with Tailwind CSS
- 🔔 **Toast Notifications** — Real-time feedback with React Toastify
---
 
## 🧰 Tech Stack
 
### Frontend
| Technology | Purpose |
|---|---|
| React.js 18 | UI Library |
| Tailwind CSS | Styling & Responsive Design |
| React Router DOM v6 | Client-side Routing |
| Axios | HTTP Requests |
| React Toastify | Notifications |
 
### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| Mongoose | MongoDB ODM |
| JWT | Authentication Tokens |
| bcryptjs | Password Hashing |
| Multer | File Upload Handling |
| Validator | Input Validation |
 
### Services & Integrations
| Service | Purpose |
|---|---|
| MongoDB | Database |
| Cloudinary | Image Storage & CDN |
| Stripe | International Payment Gateway |
| Razorpay | Indian Payment Gateway |
 
---
 
## 📁 Project Structure
 
```
apnastore/
├── client/                  # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # React context (cart, auth, etc.)
│   │   ├── pages/           # Route-level pages
│   │   └── App.jsx
│   ├── package.json
│   └── tailwind.config.js
│
├── server/                  # Express Backend
│   ├── config/              # DB & Cloudinary config
│   ├── controllers/         # Route logic
│   ├── middleware/           # Auth & upload middleware
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── server.js
│   └── package.json
│
└── README.md
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
Make sure you have the following installed:
 
- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [MongoDB](https://www.mongodb.com/) database (local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account
- A [Stripe](https://stripe.com/) account
- A [Razorpay](https://razorpay.com/) account
---
 
### 1. Clone the Repository
 
```bash
git clone https://github.com/your-username/apnastore.git
cd apnastore
```
 
---
 
### 2. Setup the Backend
 
```bash
cd server
npm install
```
 
Create a `.env` file in the `server/` directory (see [Environment Variables](#-environment-variables) below).
 
```bash
npm run dev
```
 
Server will start on `http://localhost:4000` (or your configured port).
 
---
 
### 3. Setup the Frontend
 
```bash
cd client
npm install
npm run dev
```
 
Frontend will run on `http://localhost:5173`.
 
---
 
## 🔐 Environment Variables
 
Create a `.env` file inside the `server/` directory and add the following:
 
```env
# ─── Database ───────────────────────────────────────
MONGODB_URI=your_mongodb_connection_string
 
# ─── Cloudinary ─────────────────────────────────────
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
 
# ─── Authentication ──────────────────────────────────
JWT_SECRET=your_super_secret_jwt_key
 
# ─── Admin Credentials ───────────────────────────────
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=securepassword
 
# ─── Stripe ──────────────────────────────────────────
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
 
# ─── Razorpay ────────────────────────────────────────
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
 
# ─── App Config ──────────────────────────────────────
CURRENCY=INR
```
 
> ⚠️ **Never commit your `.env` file.** Add it to `.gitignore` immediately.
 
---
 
## 📜 Scripts
 
### Backend (`/server`)
 
| Command | Description |
|---|---|
| `npm start` | Start server in production mode |
| `npm run dev` | Start server with nodemon (hot reload) |
 
### Frontend (`/client`)
 
| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
 
---
 
## 🛣️ API Overview
 
### Auth Routes
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Login and receive JWT |
| POST | `/api/user/admin` | Admin login |
 
### Product Routes
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/product/list` | Get all products |
| GET | `/api/product/single` | Get single product |
| POST | `/api/product/add` | Add product (Admin) |
| POST | `/api/product/remove` | Remove product (Admin) |
 
### Cart Routes
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/cart/get` | Get user cart |
| POST | `/api/cart/add` | Add item to cart |
| POST | `/api/cart/update` | Update cart item |
 
### Order Routes
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/order/place` | Place order (COD) |
| POST | `/api/order/stripe` | Place order via Stripe |
| POST | `/api/order/razorpay` | Place order via Razorpay |
| POST | `/api/order/userorders` | Get user's orders |
| POST | `/api/order/list` | List all orders (Admin) |
| POST | `/api/order/status` | Update order status (Admin) |
 
---
 
## 🌐 Deployment
 
ApnaStore is deployed on **Vercel**.
 
### Deploy Frontend
```bash
cd client
vercel
```
 
### Deploy Backend
```bash
cd server
vercel
```
 
> 💡 Make sure to add all environment variables in your Vercel project's **Settings → Environment Variables** panel.
 
---
 
## 🧑‍💻 Admin Access
 
To access the admin panel, navigate to `/admin` and log in using the credentials set in your `.env`:
 
```
Email:    ADMIN_EMAIL (from .env)
Password: ADMIN_PASSWORD (from .env)
```
 
---
 
## 📦 Dependencies
 
### Backend
```json
{
  "bcryptjs": "^3.0.3",
  "cloudinary": "^2.5.1",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^7.8.0",
  "multer": "^1.4.5-lts.1",
  "nodemon": "^3.1.9",
  "razorpay": "^2.9.5",
  "stripe": "^17.5.0",
  "validator": "^13.12.0"
}
```
 
### Frontend
```json
{
  "axios": "^1.7.9",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.27.0",
  "react-toastify": "^10.0.6"
}
```
 
---
 
## 🤝 Contributing
 
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
 
1. Fork the repo
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request
---
 
## 📄 License
 
This project is licensed under the [MIT License](LICENSE).
 
---
 
<div align="center">
  Made with ❤️ by the ApnaStore Team
</div>
