import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { ChatWindow } from "../components/chat/ChatWindow";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ParentPane from "../components/panes/ParentPane";

export const MainWindow: React.FC = () => {
  const [isSidePanelVisible, setSidePanelVisible] = useState(true);
  const [paneType, setPaneType] = useState<"chats" | "contacts">("chats");

  return (
    <div className="flex h-screen w-screen bg-zinc-900">
      {/* SidePanel - conditional rendering */}
      {isSidePanelVisible && (
        <div className="w-16 bg-zinc-800">
          <SidePanel onHide={() => setSidePanelVisible(false)} setPaneType={setPaneType} />
        </div>
      )}

      {/* MidPane (ParentPane) with dynamic width */}
      <ParentPane
        paneType={paneType}
        isSidePanelVisible={isSidePanelVisible}
        toggleSidePanel={() => setSidePanelVisible(!isSidePanelVisible)}
      />

      {/* Main content (ChatWindow) */}
      <div className="flex-grow bg-zinc-900">
        <ChatWindow />
      </div>
    </div>
  );
};
