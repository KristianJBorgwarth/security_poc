import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import SidePanelToggle from "../common/SidePanelToggle";
import SearchBar from "../common/SearchBar";

interface ChatsPaneProps {
  isSidePanelVisible: boolean;
  toggleSidePanel: () => void;
}

export const ChatsPane: React.FC<ChatsPaneProps> = ({ isSidePanelVisible, toggleSidePanel }) => {
  const chatsList = ["Chat 1", "Chat 2", "Chat 3"];

  return (
    <div className="text-white p-2 relative">
      {/* Title and Top Buttons */}
      <div className="flex items-center justify-between mb-4">
        {!isSidePanelVisible && <SidePanelToggle onClick={toggleSidePanel} />}

        <h2 className=" p-2 text-lg font-bold justify-center">Chats</h2>

        <button className="rounded-md text-white hover:bg-zinc-600">
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Chat List */}
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

export default ChatsPane;
