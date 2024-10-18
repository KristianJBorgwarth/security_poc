import React from "react";
import { HomeIcon, UserIcon, Cog6ToothIcon, ChatBubbleOvalLeftIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const SidePanel: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-[60px] h-screen flex flex-col justify-between py-4">
      <div className="flex flex-col items-center space-y-8">
        {/* Home Icon */}
        <HomeIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        <ChatBubbleOvalLeftIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        <UserGroupIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
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
