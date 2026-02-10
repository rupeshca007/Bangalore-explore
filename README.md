# Bangalore Explore

A full-stack web application for exploring and sharing insights about Bangalore. Built with React, Express, and MongoDB.

## 🎯 Features

- User authentication and authorization
- Create and manage blog posts
- Community discussions
- User profiles
- Responsive design

## 📁 Project Structure

```
bangalore-explore/
├── backend/          # Node.js/Express API server
│   ├── config/       # Database configuration
│   ├── middleware/   # Express middleware
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   └── server.js     # Server entry point
├── frontend/         # React + Vite application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   └── main.jsx      # Entry point
│   └── vite.config.js    # Vite configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB connection and other configurations
npm run dev
```

The backend server will run on `http://localhost:5000` (or your configured port).

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend development server will run on `http://localhost:5173`.

## 📦 Tech Stack

### Backend
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Nodemon** - Development tool

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **ESLint** - Code linting

## 🔗 API Endpoints

Include main API routes documentation here.

## 🛠️ Development

### Backend Scripts
- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author

[Your Name/Organization]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
