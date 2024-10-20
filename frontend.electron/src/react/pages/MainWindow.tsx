import React from "react";
import { SidePanel } from "../components/SidePanel";
import { ChatWindow } from "../components/Chat/ChatWindow";

export const MainWindow: React.FC = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* SidePanel */}
      <SidePanel />

      {/* Main content (ChatWindow) */}
      <div className="flex-grow flex flex-col">
        <ChatWindow />
      </div>
    </div>
  );
};
