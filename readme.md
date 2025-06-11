# 🌿 EcoGesture

**EcoGesture** is a digital platform designed to make communication more accessible and inclusive by bridging the gap between spoken language and sign language. Using modern web technologies, EcoGesture enables users to convert **text, voice, or letters into sign language** in real-time, empowering people to connect and express themselves effortlessly.

- 🌐 **Live Site:** [https://ecogesture.vercel.app](https://ecogesture.vercel.app)
- 📂 **GitHub Repo:** [https://github.com/Blitzkrieg28/ecogesture](https://github.com/Blitzkrieg28/ecogesture)

---

## 🔑 Features

- 🔐 Secure Sign In & Sign Up with JWT Authentication
- 🛋️ Password Recovery via OTP Verification
- ✍️ **Text-to-Sign** Language Conversion with Built-in Translator
- 🎤 **Voice-to-Sign** Interpretation
- ✉️ **Letter-to-Sign** Mode for Character-Level Input
- 🧑‍🧠 AI Chatbot for Guided Assistance
- 🔄 Fully Responsive and Accessible Interface

---

## 🛠 Tech Stack

- **Frontend:** React.js (with useReducer), deployed on Vercel
- **Backend:** Node.js, Express.js, MongoDB, deployed on Render
- **Authentication:** JWT (JSON Web Tokens)
- **Additional:** OTP-based Password Reset, AI Integration

---

## 📁 Project Structure

```
EcoGesture/
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env.example
│   └── index.js
├── Frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── reducers/
│       ├── services/
│       ├── utils/
│       └── App.js
│   ├── .env.example
│   └── package.json
├── .gitignore
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Blitzkrieg28/ecogesture.git
cd ecogesture
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd Frontend
npm install

# Install backend dependencies
cd ../Backend
npm install
```

### 3. Configure Environment Variables

Use the provided `.env.example` files as templates and fill in the required variables:

**Backend `.env`**
```
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
EMAIL_API_KEY=your_email_service_api_key
```

**Frontend `.env`**
```
REACT_APP_API_URL=https://ecogesture-backend2.onrender.com
```

### 4. Run the Application

```bash
# Start backend
cd Backend
node index.js

# Start frontend
cd ../Frontend
npm start
```

---

## 🔐 Authentication

- All sensitive routes are protected with JWT.
- OTP verification is used for password reset.
- Include JWT in request headers as follows:

```
Authorization: Bearer <your_token>
```

---

## 📘 API Overview

- `POST /auth/signup` – Register a new user
- `POST /auth/signin` – Login
- `POST /auth/forgot-password` – Send OTP to email
- `POST /auth/reset-password` – Reset password via OTP
- `POST /convert/text-to-sign` – Convert text input to sign language
- `POST /convert/voice-to-sign` – Convert voice input to sign language

---

## 👨‍💻 Author

**Tanmay**  
GitHub: [@Blitzkrieg28](https://github.com/Blitzkrieg28)

---