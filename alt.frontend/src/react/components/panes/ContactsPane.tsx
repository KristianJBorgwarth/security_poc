import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import SearchBar from "../common/SearchBar";
import SidePanelToggle from "../common/SidePanelToggle";

interface ContactsPaneProps {
  isSidePanelVisible: boolean;
  toggleSidePanel: () => void;
}

export const ContactsPane: React.FC<ContactsPaneProps> = ({ isSidePanelVisible, toggleSidePanel }) => {
  const contactList = ["Contact 1", "Contact 2", "Contact 3"];

  return (
    <div className="text-white p-2 relative">
      {/* Title and Top Buttons */}
      <div className="flex items-center justify-between mb-4">
        {/* Left Toggle Button */}
        {!isSidePanelVisible && <SidePanelToggle onClick={toggleSidePanel} />}

        {/* Chats Title */}
        <div className="flex-grow text-center">
          <h2 className="text-lg font-bold">Contacts</h2>
        </div>

        {/* Right Add Button */}
        <button className="p-2 rounded-md text-white hover:bg-zinc-600">
          <PhoneIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Contact List */}
      <ul>
        {contactList.map((contact, index) => (
          <li key={index} className="py-2 border-b border-gray-500">
            {contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPane;
