// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './pages/Landingpage/HeroPage.jsx';
import Login from './pages/login/login.jsx';
import SignUpUser from './pages/SignUp/SignUpUser.jsx';
import ResetPassword from './components/login/ResetPassword.jsx';
import UserProfile from './pages/user/UserProfile.jsx';
import HomePage from './pages/user/HomePage.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';

import Chatadmin from './pages/admin/Chatadmin';
import Chatuser from './pages/user/chatuser';
import ESignature from './components/signateur';
import UserHome from './components/PageHome';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="flex-1 overflow-auto">
          <Routes>
            {/* Auth & Main Pages */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/SignUpUser" element={<SignUpUser />} />

            {/* User/Admin Dashboards */}
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />

            {/* Messaging + Signature */}
            <Route path="/chat/admin" element={<Chatadmin />} />
            <Route path="/chat/user" element={<Chatuser />} />
            <Route path="/esign" element={<ESignature />} />
            <Route path="/userhome" element={<UserHome />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
