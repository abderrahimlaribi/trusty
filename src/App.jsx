// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Chatadmin from './pages/admin/Chatadmin';
import Chatuser from './pages/user/chatuser';
import ESignature from './components/signateur';
import UserHome from './components/PageHome';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/chat/admin" element={<Chatadmin />} />
          <Route path="/chat/user" element={<Chatuser />} />
          <Route path="/esign" element={<ESignature />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
