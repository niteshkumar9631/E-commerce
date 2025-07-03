# 🛒 E-commerce

A **full-stack E-commerce application** built with React, Node.js, Express, and MongoDB.  
It includes user and admin dashboards, product management, secure authentication, and payment integration.

## 🌐 Live Demo
👉 

---

##  Features

- User registration and login with JWT authentication
- Product listing and detailed product pages
- Shopping cart functionality
- Order placement and order history
- Admin panel for managing products and orders
- Payment integration with Stripe and Razorpay
- Responsive design for all screen sizes
- Cloud-based image storage with Cloudinary

🖼️ Screenshots
## Home
![image](https://github.com/user-attachments/assets/ce832c93-47b8-43db-8f64-8c45d674a165)
 ![image](https://github.com/user-attachments/assets/160533cb-c66e-4397-8907-be1eabe48cd8)
![image](https://github.com/user-attachments/assets/3a1f4a0c-13f1-40d2-9546-2d86449bb789)
![image](https://github.com/user-attachments/assets/cc0a8132-00ba-49fb-8f70-fcf8aaf9335d)

## Collection
![image](https://github.com/user-attachments/assets/2456241c-7e88-4bd7-9640-639ebe9256ea) 

## About
![image](https://github.com/user-attachments/assets/7d3ed0cc-615b-42b0-91f4-71e4de7dc1dd)

## content
![image](https://github.com/user-attachments/assets/17079a27-8230-4539-bc17-0c1c151ae43a)

## cart
![image](https://github.com/user-attachments/assets/ff6b8690-52d9-4746-a61b-0ff38908e600)

## Admin 
![image](https://github.com/user-attachments/assets/01156466-136a-43f4-ab64-76b6812222ee)
![image](https://github.com/user-attachments/assets/f9dc317c-398d-4a0f-ba01-0d4db186a338)
![image](https://github.com/user-attachments/assets/82a1db85-6f49-4a3e-8359-462736ada06e)

## Order
![image](https://github.com/user-attachments/assets/07b5127d-6b34-4964-ab57-c5dc3c084d1f)

## Payment
![image](https://github.com/user-attachments/assets/2cd9a6a7-f141-4c43-8691-db67973e9219)

---

## 🛠️ Tech Stack

| Layer       | Tech Used                             |
|-------------|----------------------------------------|
| Frontend    | React, HTML, CSS, JavaScript           |
| Backend     | Node.js, Express.js                    |
| Database    | MongoDB                                |
| Auth        | JSON Web Tokens (JWT)                  |                             
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
