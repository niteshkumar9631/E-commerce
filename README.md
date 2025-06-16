# 🛒 E-commerce

A full-stack E-commerce application built using **Node.js**, **Express**, **MongoDB**, and **React**. This project provides a robust platform for online shopping, featuring user authentication, product management, and a seamless shopping experience.

---

## 🌐 Live Demo

👉 [e-commerce-two-amber.vercel.app]()

---

## 🛠️ Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JSON Web Tokens (JWT)  
- **Email Service**: Nodemailer  
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## 🖼️ Project Structure
E-commerce/
│
├── backend/ → Node.js + Express API
├── frontend/ → React-based frontend
├── admin/ → Admin dashboard panel


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

```bash
git clone https://github.com/Gulshan36/E-commerce.git
cd E-commerce

## Backend Setup:
cd backend
npm install

## Frontend Setup:
cd ../frontend
npm install

## Admin Panel Setup:
cd ../admin
npm install

## 🔐 Environment Variables
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

## ▶️ Run the Application
## Backend
cd backend
npm run server

## Frontend
cd ../frontend
npm run dev

##Admin Panel
cd ../admin
npm run dev

Frontend: http://localhost:5173

Backend: http://localhost:4000

Admin Panel: usually runs on http://localhost:5174

## 📜 License
This project is licensed under the MIT License.
