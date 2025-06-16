# 🛒 E-commerce Website

A **full-stack E-commerce application** built with React, Node.js, Express, and MongoDB.  
It includes user and admin dashboards, product management, secure authentication, and payment integration.

## 🌐 Live Demo
👉 

---

## 🚀 Features

- User registration and login with JWT authentication
- Product listing and detailed product pages
- Shopping cart functionality
- Order placement and order history
- Admin panel for managing products and orders
- Payment integration with Stripe and Razorpay
- Responsive design for all screen sizes
- Email notifications for orders using Nodemailer
- Cloud-based image storage with Cloudinary

🖼️ Screenshots
## Home
- ![image](https://github.com/user-attachments/assets/eaf2067a-688c-4731-8fc3-cbab0a0d9ecb) ![image](https://github.com/user-attachments/assets/160533cb-c66e-4397-8907-be1eabe48cd8)
- ![image](https://github.com/user-attachments/assets/3a1f4a0c-13f1-40d2-9546-2d86449bb789) ![image](https://github.com/user-attachments/assets/cc0a8132-00ba-49fb-8f70-fcf8aaf9335d)



---

## 🛠️ Tech Stack

| Layer       | Tech Used                             |
|-------------|----------------------------------------|
| Frontend    | React, HTML, CSS, JavaScript           |
| Backend     | Node.js, Express.js                    |
| Database    | MongoDB                                |
| Auth        | JSON Web Tokens (JWT)                  |
| Emails      | Nodemailer                             |
| Payments    | Stripe / Razorpay                      |
| Image Upload| Cloudinary                             |
| Deployment  | Vercel (Frontend), Render/Heroku (Backend) |

---

## 🔧 Project Setup
Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud-based)

### 📁 1. Clone the Repository

```bash
git clone https://github.com/niteshkumar9631/E-commerceWebsite.git
cd E-commerceWebsite
```
🖥️ 2. Backend Setup:
```
cd backend
npm install
```
🌐 3. Frontend Setup:
```
cd ../frontend
npm install
```
🧑‍💼 4. Admin Panel Setup:
```
cd ../frontend
npm install
```
🔐 Environment Variables (.env)
Create a .env file inside the backend folder and add the following variables:
```
MONGODB_URI=              # MongoDB connection string
CLOUDINARY_CLOUD_NAME=    # Cloudinary cloud name for image storage
CLOUDINARY_API_KEY=       # Cloudinary API key
CLOUDINARY_SECRET_KEY=    # Cloudinary API secret key
JWT_SECRET=               # Secret key for JWT authentication
ADMIN_EMAIL=              # Admin login email
ADMIN_PASSWORD=           # Admin login password
STRIPE_SECRET_KEY=        # Stripe API secret key for payments
RAZORPAY_KEY_ID=          # Razorpay public key for payments
RAZORPAY_KEY_SECRET=      # Razorpay secret key
EMAIL_USER=               # Email address for sending emails
EMAIL_PASS=               # App password or email password
```
▶️ Run the Application:
Backend:
```
cd backend
npm run server
```
Frontend:
```
cd ../frontend
npm run dev
```
Admin Panel:
```
cd ../admin
npm run dev
```
- Frontend available at: http://localhost:5173

- Backend available at: http://localhost:4000

- Admin Panel on its own port (e.g., http://localhost:5174)

  📝 License
- This project is licensed under the MIT License.
