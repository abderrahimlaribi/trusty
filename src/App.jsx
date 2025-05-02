// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatBox from './components/ChatBox';

export default function App() {
  return (
    <div className="flex min-h-screen bg-light font-sans">
      <Sidebar />
      <ChatList />
      <ChatBox />
    </div>
  );
}
