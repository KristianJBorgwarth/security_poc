import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainWindow } from "./pages/MainWindow";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainWindow />} />
      </Routes>
    </Router>
  );
};

export default App;
