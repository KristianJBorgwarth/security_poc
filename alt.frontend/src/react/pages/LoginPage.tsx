import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";

const CreateUserPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [connectionID, setConnectionId] = useState("");
  const navigate = useNavigate();

  const createUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Creating user...");
    window.electron
      .createUser(username, connectionID)
      .then(() => {
        navigate("/main");
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-950 text-white">
      <div className="flex flex-col items-center w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">LOGIN</h1>
        <form onSubmit={createUser} className="flex flex-col items-center w-full space-y-4">
          <div className="w-full">
            <InputBox type="text" placeholder="Usename" value={username} onChange={e => setUsername(e.target.value)} />

            <InputBox
              type="text"
              placeholder="Connection ID (UUID)"
              value={connectionID}
              onChange={e => setConnectionId(e.target.value)}
            />
          </div>
          <Button type="submit" text="Login" />
        </form>
      </div>
    </div>
  );
};

export default CreateUserPage;
