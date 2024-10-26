import React, { useState, useEffect, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface ChatInputBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

export const ChatInputBar: React.FC<ChatInputBarProps> = ({ value, onChange, onSend }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="flex items-center bg-zinc-950 px-6 py-3">
      <div className="flex items-center bg-zinc-800 rounded-full w-full px-3 py-2">
        <textarea
          ref={inputRef}
          rows={1} // Initial row
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyPress}
          placeholder="Message"
          className="w-full resize-none bg-transparent text-white placeholder-gray-400 outline-none h-auto"
          style={{ maxHeight: "100px" }} // Control max height
        />
        <button onClick={onSend} className="ml-2">
          <PaperAirplaneIcon className="text-white w-6 h-6 hover:text-blue-600" />
        </button>
      </div>
    </div>
  );
};
