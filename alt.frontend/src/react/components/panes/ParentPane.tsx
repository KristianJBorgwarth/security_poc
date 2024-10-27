import React from "react";
import { ChatsPane } from "./ChatsPane";
import { ContactsPane } from "./ContactsPane";

interface ParentPaneProps {
  paneType: "chats" | "contacts";
  isSidePanelVisible: boolean;
  toggleSidePanel: () => void;
}

export const ParentPane: React.FC<ParentPaneProps> = ({ paneType, isSidePanelVisible, toggleSidePanel }) => {
  return (
    <div className="bg-zinc-800 h-full border-r border-zinc-600 transition-all duration-300 min-w-[250px] w-1/3 relative">
      {/* Conditionally Render Subpane Content */}
      {paneType === "chats" ? (
        <ChatsPane isSidePanelVisible={isSidePanelVisible} toggleSidePanel={toggleSidePanel} />
      ) : (
        <ContactsPane />
      )}
    </div>
  );
};

export default ParentPane;
