import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear token and update state
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    // Redirect to home after logout
    navigate("/");
  }, [setIsLoggedIn, navigate]);

  return null; // nothing to render, just side effects
}

export default Logout;