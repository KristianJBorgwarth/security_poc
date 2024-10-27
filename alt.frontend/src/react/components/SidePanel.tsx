import React from "react";
import { UserIcon, Cog6ToothIcon, ChatBubbleOvalLeftIcon, UserGroupIcon, Bars3Icon } from "@heroicons/react/24/outline";
import SidePanelToggle from "./common/SidePanelToggle";

export const SidePanel: React.FC<{ onHide: () => void; setPaneType: (type: "chats" | "contacts") => void }> = ({
  onHide,
  setPaneType,
}) => {
  return (
    <div className="bg-zinc-800 text-white w-[60px] h-screen flex flex-col justify-between py-3 border-r border-zinc-600">
      <div className="flex flex-col items-center space-y-4">
        <SidePanelToggle onClick={onHide} />

        {/*Chat button*/}
        <button onClick={() => setPaneType("chats")} className="p-2 rounded-md text-white hover:bg-zinc-600">
          <ChatBubbleOvalLeftIcon className="w-5 h-5 " />
        </button>

        {/*Contacts*/}
        <button onClick={() => setPaneType("contacts")} className="p-2 rounded-md text-white hover:bg-zinc-600">
          <UserGroupIcon className="w-5 h-5 cursor-pointer hover:text-gray-300" />
        </button>
      </div>

      {/* Bottom Icons: User Profile and Settings */}
      <div className="flex flex-col items-center space-y-8">
        <UserIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        <Cog6ToothIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
      </div>
    </div>
  );
};

export default SidePanel;
