import React from "react";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/outline";

export const SidePanel: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-[60px] h-full flex flex-col items-center py-4 space-y-8">
      {/* Home Icon */}
      <HomeIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />

      {/* User Profile Icon */}
      <UserIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />

      {/* Settings Icon */}
      <CogIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
    </div>
  );
};

export default SidePanel;
