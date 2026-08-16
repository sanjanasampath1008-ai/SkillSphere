# SkillSphere

> Turn your skills into your next opportunity.

SkillSphere is a career development platform designed to help employees understand their skills, identify career gaps, and build a clear path toward their next career opportunity.

## 🌐 Live Demo

**Website:** https://skill-sphere-liart-seven.vercel.app/

## 📌 Project Overview

SkillSphere provides a simple platform for users to explore their career development journey through skill assessment, career paths, and personalized development opportunities.

The project includes a modern frontend, a Node.js backend, user authentication, and MongoDB database integration.

## ✨ Features

* 🔐 User registration and login
* 👤 User authentication using JWT
* 🧠 Skill-focused career development
* 📊 Skill DNA section
* 🚀 Career Paths section
* 👨‍💼 Resources for managers
* 🎯 Personalized career development experience
* 📱 Responsive and modern user interface
* 🔗 Frontend and backend API integration
* 🗄️ MongoDB database integration

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* CSS
* Vite

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB Atlas

### Authentication

* JSON Web Tokens (JWT)

### Deployment

* Vercel — Frontend
* Render — Backend
* MongoDB Atlas — Database

## 📂 Project Structure

```text
SkillSphere/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

## ⚙️ Environment Variables

The backend uses environment variables for configuration and security.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

For security, never commit your actual `.env` file, MongoDB credentials, or JWT secret to GitHub.

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/sanjanasampath1008-ai/SkillSphere.git
cd SkillSphere
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

### 5. Configure backend environment variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 6. Start the backend

```bash
npm start
```

The frontend and backend can then run together locally.

## 🔗 Deployment

The project is deployed using:

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

### Live Application

https://skill-sphere-liart-seven.vercel.app/

## 🔒 Security

Sensitive credentials are stored using environment variables rather than being hard-coded into the application.

The project uses JWT-based authentication for protected user functionality.

## 🎯 Project Goal

The goal of SkillSphere is to provide employees with a centralized platform where they can better understand their current skills, identify areas for improvement, and explore possible career development paths.

## 👩‍💻 Author

**Sanjana Sampath Kumar**

GitHub: https://github.com/sanjanasampath1008-ai

## 📄 License

This project was created as a project implementation for educational and development purposes.
