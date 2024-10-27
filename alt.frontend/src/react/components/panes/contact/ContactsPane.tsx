import React, { useState } from "react";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import SearchBar from "../../common/SearchBar";
import SidePanelToggle from "../../common/SidePanelToggle";
import Contact from "./Contact";
import Button from "../../common/Button";

interface ContactsPaneProps {
  isSidePanelVisible: boolean;
  toggleSidePanel: () => void;
}

export const ContactsPane: React.FC<ContactsPaneProps> = ({ isSidePanelVisible, toggleSidePanel }) => {
  const [contacts, setContacts] = useState(["Dave", "Eric", "John"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [connectionId, setConnectionId] = useState("");

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const handleAddContact = async () => {
    if (username.trim() !== "" && connectionId.trim() !== "") {
      try {
        // Create the contact using the connection ID and username provided
        // we also need the userID of the current user? Could we have a global state for this? When the user logs in we could place the userID in the global state? Is there a library that can help with this? Redux?

        // Clear the inputs
        setUsername("");
        setConnectionId("");

        closeModal();
      } catch (error) {
        console.error("Failed to add contact:", error);
      }
    }
  };

  return (
    <div className="text-white p-2 relative">
      {/* Title and Top Buttons */}
      <div className="flex items-center justify-between mb-4">
        {/* Left Toggle Button */}
        {!isSidePanelVisible && <SidePanelToggle onClick={toggleSidePanel} />}

        {/* Contacts Title */}
        <div className="flex-grow text-center">
          <h2 className="text-lg font-bold">Contacts</h2>
        </div>

        {/* Right Add Button */}
        <button className="p-2 rounded-md text-white hover:bg-zinc-600" onClick={openModal}>
          <UserPlusIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Contact List */}
      <ul className="mt-4 space-y-2">
        {contacts.map((contact, index) => (
          <li key={index}>
            <Contact name={contact} />
          </li>
        ))}
      </ul>

      {/* Modal for Adding a Contact */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full flex flex-col items-center justify-center max-w-md transform overflow-hidden rounded-md bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" className="text-lg font-medium leading-6 text-white text-center">
                  Add Contact
                </DialogTitle>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Connection ID (UUID)"
                    value={connectionId}
                    onChange={e => setConnectionId(e.target.value)}
                    className="w-80 h-10 bg-zinc-800 text-white border border-gray-600 rounded-md p-2"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Connection ID (UUID)"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-80 h-10 bg-zinc-800 text-white border border-gray-600 rounded-md p-2 mb-3"
                  />
                </div>
                <Button
                  type="button"
                  text="Add Contact"
                  onClick={handleAddContact}
                  disabled={username.trim() === "" || connectionId.trim() === ""}
                />
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ContactsPane;
