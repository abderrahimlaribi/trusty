// ChatBox.jsx - Fixed chat layout with proper left/right alignment
import React from 'react';
import { FaPhone, FaVideo, FaEllipsisV, FaPaperclip, FaSmile, FaMicrophone } from 'react-icons/fa';

export default function ChatBox() {
  const messages = [
    { sender: 'other', text: 'Hey there!' },
    { sender: 'other', text: 'How are you?' },
    { sender: 'me', text: 'Hello!' },
    { sender: 'me', text: 'I am fine, and you?' },
    { sender: 'other', text: 'Can we meet tomorrow?' },
    { sender: 'me', text: 'Yes, sure!' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-light">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between bg-white">
        <div>
          <div className="font-semibold">Anil</div>
          <div className="text-xs text-gray-500">Online • Last seen 2:02pm</div>
        </div>
        <div className="flex gap-4 text-primary">
          <FaPhone className="cursor-pointer" />
          <FaVideo className="cursor-pointer" />
          <FaEllipsisV className="cursor-pointer" />
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-blue-50 flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-xl shadow text-sm ${
              msg.sender === 'me' ? 'self-end bg-primary text-black' : 'self-start bg-gray-200 text-black'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="p-4 border-t bg-white flex items-center gap-2">
        <FaSmile />
        <input
          type="text"
          placeholder="Type your message here..."
          className="flex-1 p-2 border border-gray-300 rounded-xl"
        />
        <FaPaperclip />
        <FaMicrophone />
      </div>
    </div>
  );
}
