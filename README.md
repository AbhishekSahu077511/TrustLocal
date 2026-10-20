TrustLocal 🌐

Hyperlocal Service Marketplace

TrustLocal is a full-stack web application designed to connect users with local service providers through a convenient and user-friendly platform. It helps users discover services, manage bookings, and interact with providers through a centralized marketplace.

✨ Key Features

  1. Role-Based Dashboards: Separate dashboards and functionality based on user roles.
  
  2. Global Search: Search for relevant services and discover local providers.
  
  3. Booking Management: Manage service bookings and track booking status updates.
  
  4. Ratings & Reviews: Support service evaluation through a star-rating system.
  
  5. Analytics Dashboard: Visualize relevant data using charts and analytics.
  
  6. Service Discovery: Explore local services through a centralized marketplace.

## 🛠️ Tech Stack

### 🎨 Frontend
  - **React.js** – Component-based user interface
  - **Vite** – Frontend development and build tool
  - **Tailwind CSS** – Responsive UI styling
  - **Framer Motion** – UI animations and transitions
  - **Lucide React** – Icon library
  - **React Context API** – Application state management
  - **Axios** – HTTP requests and API integration

### ⚙️ Backend
  - **Node.js** – JavaScript runtime
  - **Express.js** – Backend framework and API development
  - **JWT (JSON Web Tokens)** – Authentication
  - **Bcrypt.js** – Password hashing
  - **Nodemailer** – Email delivery and OTP functionality using Gmail SMTP
  - **Dotenv** – Environment variable management
  - **CORS Middleware** – Cross-origin request handling

### 🗄️ Database
  - **MongoDB** – NoSQL database
  - **Mongoose** – MongoDB object data modeling (ODM)

### 🔧 Development Tools
  - **Postman** – API testing
  - **Git & GitHub** – Version control and source code management
  - **Nodemon** – Automatic backend server restarts during development

## 📁 Project Structure

```text
TrustLocal/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   └── bookingController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Booking.js
│   │   └── User.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   └── bookingRoutes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── BookingCard.jsx
│   │   │   ├── BookingModal.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProviderCard.jsx
│   │   │   ├── ReviewModal.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ThemePicker.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── BookingPage.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── ProviderDashboard.jsx
│   │   │   ├── ProviderProfile.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Services.jsx
│   │   │   └── UserDashboard.jsx
│   │   ├── utils/
│   │   │   └── generateInvoice.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
└── README.md
```

## 🎯 Project Goals & Vision

### 🌐 1. Digitize the Local Service Economy
Replace informal word-of-mouth recommendations and outdated directories with a centralized digital marketplace where customers can easily discover, book, and review local service professionals, including electricians, plumbers, and technicians.

### 🛡️ 2. Establish Trust & Safety
Build a trustworthy service ecosystem through user authentication, email verification, and customer reviews.
- Implement secure authentication using JSON Web Tokens (JWT).
- Integrate an automated 6-digit email OTP verification workflow using Nodemailer.
- Support service-provider credibility through verification and a review system.

### 📅 3. Streamline Booking & Job Management
Simplify service booking and job tracking through dedicated, role-based dashboards for **Customers, Providers, and Admins**.
- Organize booking workflows across `Pending`, `Accepted`, and `Completed` statuses.
- Provide role-specific interfaces for managing bookings and service activities.
- Improve visibility into booking progress and service management.

### 📈 4. Empower Independent Service Professionals
Help local technicians establish a digital identity, build customer trust, and grow their client base.
- Provide transparent earnings tracking.
- Present performance insights through analytics dashboards.
- Visualize customer ratings with 5-star rating breakdown charts.
- Help service providers showcase their credibility and service performance.

### ⚡ 5. Focus on Performance & Scalability
Develop a responsive, lightweight single-page application using the **MERN Stack**.
- **MongoDB:** Flexible data storage and querying.
- **Express.js & Node.js:** Backend APIs and server-side logic.
- **React.js & Vite:** Interactive user interfaces and fast development builds.
- **Performance goals:** Target database lookup times below 50 ms and smooth UI transitions at 60 FPS.

The long-term vision of TrustLocal is to make discovering reliable local services easier, more transparent, and more accessible for customers and independent professionals.


👨‍💻 Author

Abhishek Sahu
    
