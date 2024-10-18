import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { App } from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement); // Create root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
