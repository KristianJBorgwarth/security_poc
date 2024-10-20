import React from "react";

export const ChatsPane: React.FC = () => {
  const chatsList = [
    "Chat 1",
    "Chat 2",
    "Chat 3",
    "Chat 4",
    "Chat 5",
    "Chat 6",
    "Chat 7",
    "Chat 8",
    "Chat 9",
    "Chat 10",
  ];

  return (
    <div className="bg-zinc-800 text-white w-[250px] h-screen p-4 absolute left-[60px] top-0">
      <h2 className="text-lg mb-4">Chats List</h2>
      <ul>
        {chatsList.map((chat, index) => (
          <li key={index} className="py-2 border-b border-gray-500">
            {chat}
          </li>
        ))}
      </ul>
    </div>
  );
};
