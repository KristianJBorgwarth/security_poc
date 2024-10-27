import React, { useEffect, useState, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { ChatInputBar } from "./ChatInputBar";

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ message: string; sender: string }[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {});

  const handleSendMessage = async () => {};

  return (
    <div className="flex flex-col h-full w-full">
      {/* Message area */}
      <div className="flex-grow flex flex-col space-y-2 overflow-y-auto bg-zinc-950 p-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg.message} sender={msg.sender} />
        ))}
      </div>

      <ChatInputBar value={newMessage} onChange={e => setNewMessage(e.target.value)} onSend={handleSendMessage} />
      {/* Chat input area */}
    </div>
  );
};
