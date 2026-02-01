# 🏥 HealthBridge - AI-Powered Telemedicine Platform

<div align="center">

![HealthBridge Banner](https://img.shields.io/badge/HealthBridge-AI%20Telemedicine-4f46e5?style=for-the-badge)
[![Live Demo](https://img.shields.io/badge/Live-Demo-10b981?style=for-the-badge)](https://health-bridge-rust.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**Empowering Nagpur with AI-driven healthcare solutions**

[Live Demo](https://health-bridge-rust.vercel.app) • [Documentation](#documentation) • [Features](#features) • [Installation](#installation)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌟 Overview

**HealthBridge** is an advanced AI-powered telemedicine platform designed specifically for Nagpur's rural healthcare ecosystem. It bridges the gap between patients and healthcare providers using cutting-edge technology, making quality healthcare accessible to everyone.

### 🎯 Mission
To democratize healthcare access in rural Nagpur by leveraging AI, real-time data, and seamless communication technologies.

### 💡 Key Highlights
- 🤖 **AI-Powered Diagnostics** - Google Gemini integration for intelligent symptom analysis
- 🏥 **Real-Time Bed Tracking** - Live hospital bed availability across Nagpur
- 👨‍⚕️ **Doctor Network** - Comprehensive database of verified healthcare professionals
- 📹 **Video Consultations** - Secure, HIPAA-compliant telemedicine sessions
- 🌍 **Multi-Language Support** - Accessible in multiple Indian languages
- 📱 **Mobile-First Design** - Optimized for smartphones and tablets

---

## ✨ Features

### For Patients

#### 🤖 AI Symptom Checker
- Powered by Google Gemini AI
- Intelligent symptom analysis and recommendations
- Personalized health insights
- Emergency detection and alerts

#### 👨‍⚕️ Find & Book Doctors
- Browse 100+ verified doctors
- Filter by specialty, location, and availability
- Real-time appointment booking
- Doctor ratings and reviews
- Contact information and social media links

#### 📹 Video Consultations
- HD video/audio calls
- Screen sharing for lab reports
- Secure end-to-end encryption
- Session recording (with consent)
- Real-time chat during consultations

#### 🔬 Lab Report Analysis
- AI-powered report interpretation
- Trend analysis and visualization
- Automatic health recommendations
- Report history and storage

#### 💊 Prescription Management
- Digital prescription storage
- Medication reminders
- Drug interaction warnings
- Pharmacy integration

#### 📊 Health Dashboard
- Vital signs tracking (BP, heart rate, glucose)
- Health trends and analytics
- Appointment history
- Medical records access

#### 🏥 Real-Time Bed Tracker
- Live bed availability across Nagpur hospitals
- ICU, general ward, and emergency bed status
- Hospital contact information
- Directions and navigation

#### 🆘 SOS Emergency Button
- One-tap emergency assistance
- Automatic location sharing
- Emergency contact notification
- Nearest hospital routing

### For Doctors

#### 📋 Doctor Dashboard
- Patient appointment management
- Medical history access
- Prescription creation tools
- Video consultation interface
- Revenue analytics

#### 💊 E-Prescription System
- Digital prescription templates
- Drug database integration
- Automatic dosage calculations
- Patient prescription history

#### 📊 Patient Management
- Comprehensive patient profiles
- Medical history tracking
- Lab report access
- Treatment plan management

### For Administrators

#### 🎛️ Admin Dashboard
- System-wide analytics
- User management
- Doctor verification
- Hospital bed management
- Platform monitoring

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Routing:** React Router DOM 7.12.0
- **Animations:** Framer Motion 12.26.2
- **Charts:** Chart.js 4.5.1 + React-ChartJS-2
- **Icons:** Lucide React 0.562.0
- **Styling:** CSS3 with CSS Variables

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **File Storage:** Firebase Storage

### AI & APIs
- **AI Engine:** Google Gemini API 0.24.1
- **Natural Language Processing:** Google Generative AI

### Deployment
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Railway (optional)
- **CDN:** Vercel Edge Network
- **SSL:** Automatic HTTPS

### Development Tools
- **Linting:** ESLint 9.39.1
- **Code Quality:** React Hooks ESLint Plugin
- **Version Control:** Git & GitHub

---

## 🌐 Live Demo

**Production URL:** [https://health-bridge-rust.vercel.app](https://health-bridge-rust.vercel.app)

### Demo Credentials

For testing purposes, you can use these demo accounts:

#### Patient Account
```
Email: patient@demo.com
Password: demo123
```

#### Doctor Account
```
Email: doctor@demo.com
Password: demo123
```

> **Note:** The app also supports guest access - simply visit the URL and you'll be auto-logged in as a guest user.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn**
- **Git**
- A **Firebase** account
- A **Google Gemini API** key

### Quick Start

```bash
# Clone the repository
git clone https://github.com/vrushabhzade/Health-Bridge-.git

# Navigate to project directory
cd Health-Bridge-

# Install dependencies
npm install

# Set up environment variables (see Configuration section)
# Create .env.local file with your credentials

# Run development server
npm run dev
```

The application will open at `http://localhost:5173`

---

## 📦 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/vrushabhzade/Health-Bridge-.git
cd Health-Bridge-
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- Firebase SDK
- Google Generative AI
- Chart.js
- Framer Motion
- And more...

### Step 3: Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Enable the following services:
   - **Authentication** (Email/Password)
   - **Firestore Database**
   - **Storage** (optional)

4. Get your Firebase configuration:
   - Go to Project Settings → General
   - Scroll to "Your apps" → Web app
   - Copy the configuration object

### Step 4: Google Gemini API Setup

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the API key for configuration

### Step 5: Configuration

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Google Gemini API
VITE_GEMINI_API_KEY=your_gemini_api_key

# Optional: Backend API URL (if using Railway backend)
VITE_API_URL=https://your-backend.railway.app
```

> **Note:** See [FIREBASE_INTEGRATION.md](FIREBASE_INTEGRATION.md) for detailed setup instructions.

### Step 6: Run the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ⚙️ Configuration

### Firebase Configuration

Update `src/firebase/config.js` with your Firebase credentials:

```javascript
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /doctors/{doctorId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /appointments/{appointmentId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 💻 Usage

### For Patients

1. **Access the Platform**
   - Visit https://health-bridge-rust.vercel.app
   - Auto-login as guest or create an account

2. **Find a Doctor**
   - Navigate to "Find Doctors"
   - Filter by specialty or search by name
   - View doctor profiles and ratings
   - Book an appointment

3. **Use AI Symptom Checker**
   - Go to Dashboard
   - Scroll to "AI Symptom Checker"
   - Enter your symptoms
   - Get AI-powered recommendations

4. **Join Video Consultation**
   - Go to Dashboard → Upcoming Appointments
   - Click "Join Now" when appointment is accepted
   - Enjoy secure video consultation

### For Doctors

1. **Access Doctor Dashboard**
   - Login with doctor credentials
   - Navigate to `/doctor-dashboard`

2. **Manage Appointments**
   - View pending appointment requests
   - Accept or reject appointments
   - Join video consultations

3. **Create Prescriptions**
   - Access patient profile
   - Create digital prescription
   - Send to patient automatically

---

## 📁 Project Structure

```
Health-Bridge/
├── public/                      # Static assets
│   ├── doctors/                 # Doctor profile images
│   ├── manifest.json           # PWA manifest
│   └── sw.js                   # Service worker
├── server/                      # Backend (optional)
│   ├── index.js                # Express server
│   ├── seedDoctors.js          # Doctor data seeding
│   └── seedUser.js             # User data seeding
├── src/
│   ├── assets/                 # Images, fonts, etc.
│   ├── components/             # React components
│   │   ├── BedTracker.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── HealthWallet.jsx
│   │   ├── LabReportAnalyzer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── SOSButton.jsx
│   │   ├── Skeletons.jsx
│   │   ├── SymptomChecker.jsx
│   │   ├── SymptomTimeline.jsx
│   │   ├── VideoConsultation.jsx
│   │   └── VitalTrends.jsx
│   ├── context/                # React Context
│   │   ├── AuthContext.jsx
│   │   └── LanguageContext.jsx
│   ├── firebase/               # Firebase configuration
│   │   └── config.js
│   ├── i18n/                   # Internationalization
│   │   ├── en.js
│   │   ├── hi.js
│   │   └── mr.js
│   ├── pages/                  # Page components
│   │   ├── AdminDashboard.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── FindDoctors.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── PatientProfile.jsx
│   │   ├── Prescriptions.jsx
│   │   ├── Register.jsx
│   │   └── VideoConsult.jsx
│   ├── services/               # API services
│   │   ├── ai.js               # Google Gemini integration
│   │   └── api.js              # Backend API calls
│   ├── styles/                 # Global styles
│   ├── utils/                  # Utility functions
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Dependencies
├── README.md                   # This file
├── vercel.json                 # Vercel configuration
└── vite.config.js              # Vite configuration
```

---

## 📚 Documentation

Detailed documentation is available in the following files:

- **[DEMO_CREDENTIALS.md](DEMO_CREDENTIALS.md)** - Demo login credentials
- **[FIREBASE_INTEGRATION.md](FIREBASE_INTEGRATION.md)** - Firebase setup guide
- **[FIREBASE_QUICKSTART.md](FIREBASE_QUICKSTART.md)** - Quick Firebase setup
- **[VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)** - Vercel deployment guide
- **[RAILWAY_DEPLOYMENT.md](RAILWAY_DEPLOYMENT.md)** - Railway backend deployment
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Deployment checklist

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Deploy from GitHub (Automatic)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variables
7. Click "Deploy"

#### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Deploy Backend to Railway (Optional)

See [RAILWAY_DEPLOYMENT.md](RAILWAY_DEPLOYMENT.md) for detailed instructions.

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/vrushabhzade/Health-Bridge-.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues

### Code Style

- Use ESLint configuration provided
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic

### Reporting Issues

Found a bug? Have a suggestion?

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Vrushabh Zade

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Author

**Vrushabh Zade**

- GitHub: [@vrushabhzade](https://github.com/vrushabhzade)
- Email: vrushabhzade@example.com
- LinkedIn: [Vrushabh Zade](https://linkedin.com/in/vrushabhzade)

---

## 🙏 Acknowledgments

- **Google Gemini AI** for powering our AI features
- **Firebase** for backend infrastructure
- **Vercel** for seamless deployment
- **React Team** for the amazing framework
- **Open Source Community** for inspiration and tools

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/vrushabhzade/Health-Bridge-?style=social)
![GitHub forks](https://img.shields.io/github/forks/vrushabhzade/Health-Bridge-?style=social)
![GitHub issues](https://img.shields.io/github/issues/vrushabhzade/Health-Bridge-)
![GitHub pull requests](https://img.shields.io/github/issues-pr/vrushabhzade/Health-Bridge-)

---

## 🔮 Roadmap

### Phase 1: Core Features ✅
- [x] AI Symptom Checker
- [x] Doctor Booking System
- [x] Video Consultations
- [x] Prescription Management
- [x] Real-time Bed Tracking

### Phase 2: Enhancements 🚧
- [ ] Mobile Apps (iOS & Android)
- [ ] Payment Gateway Integration
- [ ] Insurance Claim Processing
- [ ] Advanced Analytics Dashboard
- [ ] Multi-city Expansion

### Phase 3: Advanced Features 📋
- [ ] AI-Powered Diagnosis
- [ ] Wearable Device Integration
- [ ] Blockchain Health Records
- [ ] Telemedicine Marketplace
- [ ] Health Insurance Integration

---

## 📞 Support

Need help? We're here for you!

- **Documentation:** Check our [docs](#documentation)
- **Issues:** [GitHub Issues](https://github.com/vrushabhzade/Health-Bridge-/issues)
- **Email:** support@healthbridge.com
- **Community:** Join our Discord server

---

<div align="center">

**Made with ❤️ for Nagpur's Healthcare**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/vrushabhzade/Health-Bridge-/issues) • [Request Feature](https://github.com/vrushabhzade/Health-Bridge-/issues) • [Documentation](#documentation)

</div>