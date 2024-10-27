import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartUpRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isUserPresent, setIsUserPresent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const userExists = await window.electron.userExists();
        setIsUserPresent(userExists);
        if (userExists) {
          navigate("/main");
        } else {
          navigate("/");
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <>{children}</>;
};

export default StartUpRouter;
