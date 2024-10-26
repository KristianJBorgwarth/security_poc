import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { ChatWindow } from "../components/chat/ChatWindow";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ParentPane from "../components/panes/ParentPane";

export const MainWindow: React.FC = () => {
  const [isSidePanelVisible, setSidePanelVisible] = useState(true);
  const [paneType, setPaneType] = React.useState<"chats" | "contacts" | null>(null);

  return (
    <div className="flex h-screen w-screen bg-zinc-900">
      {/* SidePanel - conditional rendering */}
      {isSidePanelVisible && (
        <div className="relative">
          <SidePanel onHide={() => setSidePanelVisible(false)} setPaneType={setPaneType} />
        </div>
      )}

      {/* Show Button when SidePanel is hidden */}
      {!isSidePanelVisible && (
        <button
          onClick={() => setSidePanelVisible(true)}
          className="absolute top-4 left-4 p-2 rounded-md text-white hover:bg-zinc-600"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      )}

      {/* MidPane */}
      <ParentPane paneType={paneType} />

      {/* Main content (ChatWindow) */ y}
      <div className="flex-grow flex flex-col">
        <ChatWindow />
      </div>
    </div>
  );
};
