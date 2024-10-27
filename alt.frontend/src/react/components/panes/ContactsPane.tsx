import React from "react";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import SearchBar from "../common/SearchBar";

export const ContactsPane: React.FC = () => {
  return (
    <div className="bg-zinc-800 h-full border-r border-zinc-600">
      {/* Title and Top Buttons */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold text-lg">Contacts</h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-white hover:bg-zinc-600 rounded">
            <VideoCameraIcon className="w-5 h-5" />
          </button>
          {/* Additional buttons as needed */}
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Contacts List */}
      <div className="text-white">
        {/* Example contact items */}
        <div className="py-2 border-b border-gray-500">Contact 1</div>
        <div className="py-2 border-b border-gray-500">Contact 2</div>
      </div>
    </div>
  );
};

export default ContactsPane;
