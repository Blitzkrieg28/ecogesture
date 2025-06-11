# 🌿 EcoGesture

**EcoGesture** is a digital platform dedicated to enhancing accessibility and inclusivity by bridging the gap between spoken language and sign language. With the power of modern web technologies, EcoGesture allows users to convert **text, voice, or letters into sign language** in real-time, helping people connect and express themselves with ease.

* 🌐 **Live Site**: [https://ecogesture.vercel.app](https://ecogesture.vercel.app)
* 📂 **GitHub Repo**: [https://github.com/Blitzkrieg28/ecogesture](https://github.com/Blitzkrieg28/ecogesture)

---

## 🔑 Key Features

* 🔐 Secure Sign In & Sign Up with JWT Authentication
* 🛋️ Password Recovery via OTP Verification
* ✍️ **Text-to-Sign** Language Conversion with Built-in Translator
* 🎤 **Voice-to-Sign** Interpretation
* ✉️ **Letter-to-Sign** Mode for Character-Level Input
* 🧑‍🧠 AI Chatbot for Guided Assistance
* 🔄 Fully Responsive and Accessible Interface

---

## 🛠 Tech Stack

* **Frontend**: React.js with useReducer, Vercel Deployment
* **Backend**: Node.js, Express.js, MongoDB, Render Deployment
* **Authentication**: JWT (JSON Web Tokens)
* **Additional**: OTP-based Password Reset, AI Integration

---

## 📁 Project Structure (Frontend & Backend Overview)

```
EcoGesture/
├── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── index.js
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── reducers/
│   │   └── App.js
│   └── package.json
├── .env.example
└── README.md
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

### 3. Create `.env` Files for Both Frontend & Backend

Use `.env.example` as a reference and fill in required variables:

**Backend .env**

```
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
EMAIL_API_KEY=your_email_service_api_key
```


```
REACT_APP_API_URL= https://ecogesture-backend2.onrender.com
```

### 4. Run the App

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

* All sensitive routes are protected with JWT.
* OTP verification is used for password reset.
* Include JWT in request headers like this:

```
Authorization: Bearer <your_token>
```

---

## 📘 API Overview (Backend Routes Summary)

* `POST /auth/signup` – Register New User
* `POST /auth/signin` – Login
* `POST /auth/forgot-password` – Send OTP to Email
* `POST /auth/reset-password` – Reset Password via OTP
* `POST /convert/text-to-sign` – Text Input Conversion
* `POST /convert/voice-to-sign` – Voice Input Conversion


---

## 👨‍💻 Author

**Tanmay**
GitHub: [@Blitzkrieg28](https://github.com/Blitzkrieg28)

---

