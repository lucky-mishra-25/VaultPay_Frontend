# VaultPay Frontend

VaultPay Frontend is a React-based payment and invoice management application.

## Features
- User Login
- Dashboard
- Create Invoice
- Stripe Payment Integration
- Payment Success & Cancel Pages

---

# Tech Stack
- React.js
- React Router DOM
- Axios
- Stripe
- Vite

---

# Folder Structure

frontend/
│
├── public/
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── CreateInvoice.jsx
│   │   ├── Success.jsx
│   │   └── Cancel.jsx
│   │
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js

---

# Installation

## Clone Repository

git clone <your-frontend-repo-link>

cd frontend

---

# Install Dependencies

npm install

---

# Environment Variables

Create a `.env` file inside frontend folder.

VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLISHABLE_KEY=your_publishable_key

---

# Run Frontend

npm run dev

Frontend runs on:

http://localhost:5173

---

# Routes

| Route | Description |
|------|-------------|
| / | Login Page |
| /dashboard | Dashboard |
| /create-invoice | Create Invoice |
| /success | Payment Success |
| /cancel | Payment Cancel |

---

# Build for Production

npm run build

---

# Deploy on Vercel

1. Push code to GitHub
2. Open Vercel
3. Import Repository
4. Add Environment Variables
5. Deploy

---

# Author
Lucky Mishra