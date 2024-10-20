import React, { useEffect, useState, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { ChatInputBar } from "./ChatInputBar";
import { MessageHubService } from "./../../../signalR/services/MessageHubService";

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ message: string; sender: string }[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messageHubServiceRef = useRef<MessageHubService | null>(null);

  useEffect(() => {
    const messageHubService = new MessageHubService("user3");
    messageHubServiceRef.current = messageHubService;

    const startConnection = async () => {
      await messageHubService.startConnection();
    };

    messageHubService.onMessageReceived(message => {
      setMessages(prevMessages => [...prevMessages, { message, sender: "other" }]);
    });

    startConnection();

    return () => {
      // Clean up the connection when the component unmounts
    };
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      if (messageHubServiceRef.current) {
        try {
          await messageHubServiceRef.current.sendMessage("user1", newMessage);
          setMessages(prevMessages => [...prevMessages, { message: newMessage, sender: "me" }]);
          setNewMessage("");
        } catch (error) {
          console.error("Error while sending message:", error);
        }
      }
    }
  };

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
