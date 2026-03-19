import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // If logged in, go to Pricing
      navigate("/pricing");
    } else {
      // If not logged in, go to Login
      navigate("/login");
    }
  };

  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Our SaaS App</h1>
        <p>Your journey to smarter solutions starts here.</p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </header>
    </div>
  );
}

export default Home;