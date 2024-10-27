import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface PanelTogglerProps {
  onClick: () => void;
}

const PanelToggler: React.FC<PanelTogglerProps> = ({ onClick }) => (
  <button onClick={onClick} className="p-2 text-white hover:bg-zinc-600 rounded-md">
    <Bars3Icon className="w-5 h-5" />
  </button>
);

export default PanelToggler;
