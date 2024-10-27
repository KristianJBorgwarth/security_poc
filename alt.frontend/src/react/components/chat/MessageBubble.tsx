import React from "react";

interface MessageBubbleProps {
  message: string;
  sender: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender }) => {
  return (
    <div
      className={`p-3 rounded-lg max-w-xs break-words ${
        sender === "me" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"
      }`}
      style={{ width: "fit-content", maxWidth: "60%" }}
    >
      <p>{message}</p>
    </div>
  );
};
