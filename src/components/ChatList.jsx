import React from 'react';

export default function ChatList() {
  return (
    <div className="w-80 bg-white p-4 border-r border-gray-200">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <div>
        <h3 className="text-xs text-gray-500 uppercase mb-1">Department</h3>
        <div className="bg-gray-100 p-3 rounded mb-3 shadow-sm cursor-pointer hover:bg-gray-200">
          <div className="font-semibold">Friends Forever</div>
          <div className="text-sm text-gray-500">Hahahaha!</div>
        </div>
      </div>

      <div>
        <h3 className="text-xs text-gray-500 uppercase mb-1">People</h3>
        {['Anil', 'Mary', 'Bill'].map((name, i) => (
          <div
            key={i}
            className="bg-gray-100 p-3 rounded mb-2 shadow-sm cursor-pointer hover:bg-gray-200"
          >
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-500">Last message preview...</div>
          </div>
        ))}
      </div>
    </div>
  );
}