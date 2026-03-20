
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
//import Pricing from "./Pricing";
import Login from "./Login";
import Logout from './Logout';
import ProtectedRoute from "./ProtectedRoute";
import PricingPage from './PricingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // setIsLoggedIn(!!token);
    localStorage.removeItem("token");
    setIsLoggedIn(false);

  }, []);
//Comment to test Git Status
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  // };

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        {isLoggedIn ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pricing"
          element={
            <ProtectedRoute>
              <PricingPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );

}

export default App;