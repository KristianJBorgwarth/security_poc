import React from "react";
import { ChatsPane } from "./ChatsPane";

const ContactsPane: React.FC = () => <div className="p-4">Contacts List</div>;

export const ParentPane: React.FC<{ paneType: "chats" | "contacts" | null }> = ({ paneType }) => {
  return (
    <div className="w-1/4 bg-zinc-800 h-full border-r border-zinc-600">
      {paneType === "chats" && <ChatsPane />}
      {paneType === "contacts" && <ContactsPane />}
    </div>
  );
};

export default ParentPane;
