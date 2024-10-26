import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const createUser = async () => {
    const connectionId = generateUUID();
    console.log(connectionId);
    const username = "test";
    const response = await window.electron.createUser(connectionId, username);
    console.log(response);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={createUser}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default App;
