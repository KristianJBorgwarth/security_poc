import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-950 text-white">
      <div className="flex flex-col items-center w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">LOGIN</h1>
        <form onSubmit={handleLogin} className="flex flex-col items-center w-full space-y-4">
          <div className="w-full mb-4">
            <InputBox
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <InputBox
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </form>
        <Button type="submit" text="Login" onClick={() => navigate("/main")} />
      </div>
    </div>
  );
};

export default LoginPage;
