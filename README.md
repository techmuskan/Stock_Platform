# Stock Platform

A full‑stack stock trading experience with a public landing site, a protected user dashboard, and a Node/Express API. The project includes paper trading, portfolio tracking, order management, and an OTP‑based password reset flow.

## Features
- Secure auth with JWT cookies
- Forgot password via email OTP (single‑use, 10‑minute expiry)
- Live dashboard: holdings, positions, orders, portfolio P/L
- Quick order placement from the dashboard
- Public landing pages plus Market Lab (simulated live market, watchlist, alerts)

## Tech Stack
- Frontend: React + Vite, React Router, Bootstrap, React Toastify
- Dashboard: React (CRA), Axios
- Backend: Node.js, Express, Mongoose, JWT, bcryptjs, nodemailer
- Database: MongoDB

## Project Structure
```
Stock_Platform/
│── backend/        # API server (Node/Express)
│── frontend/       # Public landing site (Vite)
│── dashboard/      # Authenticated user dashboard (CRA)
│── .gitignore
```

## Setup

### 1) Backend
```
cd backend
npm install
```

Create `backend/.env`:
```
PORT=3002
NODE_ENV=development
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
FRONTEND_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:5173,http://localhost:3000

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=Stock Platform <your_email@gmail.com>
```

Run:
```
npm run dev
```

### 2) Frontend (Landing Site)
```
cd frontend
npm install
npm run dev
```

Optional `frontend/.env`:
```
VITE_API_BASE_URL=http://localhost:3002
VITE_DASHBOARD_URL=http://localhost:3000/dashboard
```

### 3) Dashboard
```
cd dashboard
npm install
npm start
```

Optional `dashboard/.env`:
```
REACT_APP_API_BASE_URL=http://localhost:3002
```

## Notes
- The dashboard is served at `/dashboard` in production (via backend static hosting).
- Forgot password OTPs are emailed through SMTP (Gmail app password recommended).

## Author
Muskan Kawadkar(3rd Year, B.Tech student(Web Developer and Software Engineer))
