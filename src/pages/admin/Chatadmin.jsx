import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ChatList from '../../components/ChatList';
import ChatBox from '../../components/ChatBox';

function Chatadmin() {
  const [selectedChat, setSelectedChat] = useState(null);

  // Messages stored by name
  const [chatMessages, setChatMessages] = useState({
    Anil: [
      { from: "left", text: "Hey There!", time: "Today, 8.30pm" },
      { from: "right", text: "Hello!", time: "Today, 8.33pm" },
    ],
    "Friends Forever": [
      { from: "left", text: "Meeting soon?", time: "Today, 10.00am" },
    ],
  });

  const handleSendMessage = (newMessage) => {
    if (!selectedChat?.name) return;
    const chatName = selectedChat.name;

    setChatMessages((prev) => ({
      ...prev,
      [chatName]: [...(prev[chatName] || []), newMessage],
    }));
  };

  return (
    <div className="flex h-screen w-full bg-[#BFD7ED]">
      <Sidebar />
      <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      <ChatBox
        selectedChat={selectedChat}
        messages={chatMessages[selectedChat?.name] || []}
        onSend={handleSendMessage}
      />
    </div>
  );
}

export default Chatadmin;
