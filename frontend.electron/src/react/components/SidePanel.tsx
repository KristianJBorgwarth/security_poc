import React from "react";
import { HomeIcon, UserIcon, Cog6ToothIcon, ChatBubbleOvalLeftIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { ChatsPane } from "./ChatsPane";

export const SidePanel: React.FC = () => {
  const [paneType, setPaneType] = React.useState<"chats" | "contacts" | null>(null);

  const openChatsPane = () => {
    setPaneType("chats");
  };

  return (
    <div className="bg-zinc-800 text-white w-[60px] h-screen flex flex-col justify-between py-4 border-r border-zinc-600">
      <div className="flex flex-col items-center space-y-8">
        <HomeIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        <button onClick={openChatsPane}>
          <ChatBubbleOvalLeftIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        </button>
        <UserGroupIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
      </div>

      {/* Bottom Icons: User Profile and Settings */}
      <div className="flex flex-col items-center space-y-8">
        <UserIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        <Cog6ToothIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
      </div>

      {paneType === "chats" && <ChatsPane />}
    </div>
  );
};

export default SidePanel;
