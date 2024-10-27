import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { MainWindow } from "./pages/MainWindow";
import CreateUserPage from "./pages/CreateUserPage";
import StartUpRouter from "./routing/StartUpRouter";

const App: React.FC = () => {
  return (
    <Router>
      <StartUpRouter>
        <Routes>
          <Route path="/" element={<CreateUserPage />} />
          <Route path="/main" element={<MainWindow />} />
        </Routes>
      </StartUpRouter>
    </Router>
  );
};

export default App;
