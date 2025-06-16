# 🛒 E-commerce

A full-stack E-commerce application built using **Node.js**, **Express**, **MongoDB**, and **React**. This project provides a robust platform for online shopping, featuring user authentication, product management, and a seamless shopping experience.

---

## 🌐 Live Demo

👉 

---

## 🛠️ Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JSON Web Tokens (JWT)  
- **Email Service**: Nodemailer  
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## 🖼️ ScreenShots

---

## 🚀 Features

- 🔐 User registration and login (JWT-based authentication)
- 🛍️ Product listing and detailed product pages
- 🛒 Shopping cart functionality
- 📦 Order placement and order history
- ⚙️ Admin panel for managing products and orders
- 📱 Fully responsive design for mobile, tablet, and desktop

---

## 🧑‍💻 Getting Started

### 🔧 Prerequisites

- Node.js and npm
- MongoDB (local or cloud)

---

## 📥 Installation

1. bash
[git clone https://github.com/niteshkumar9631/E-commerceWebsite-.git]
cd E-commerce

2. Backend Setup:
cd backend
npm install

3. Frontend Setup:
cd ../frontend
npm install

3. Admin Panel Setup:
cd ../admin
npm install

🔐 Environment Variables
Create a .env file inside the backend folder and include the following:

MONGODB_URI=              # MongoDB connection string
CLOUDINARY_CLOUD_NAME=    # Cloudinary cloud name
CLOUDINARY_API_KEY=       # Cloudinary API key
CLOUDINARY_SECRET_KEY=    # Cloudinary API secret key
JWT_SECRET=               # JWT secret
ADMIN_EMAIL=              # Admin login email
ADMIN_PASSWORD=           # Admin login password
STRIPE_SECRET_KEY=        # Stripe secret key
RAZORPAY_KEY_ID=          # Razorpay public key
RAZORPAY_KEY_SECRET=      # Razorpay secret key
EMAIL_USER=               # Email address for sending emails
EMAIL_PASS=               # App/email password

▶️ Run the Application
Backend
cd backend
npm run server

Frontend
cd ../frontend
npm run dev

Admin Panel
cd ../admin
npm run dev

Frontend: http://localhost:5173

Backend: http://localhost:4000

Admin Panel: usually runs on http://localhost:5174

📜 License
This project is licensed under the MIT License.
