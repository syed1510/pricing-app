import { useEffect, useState } from "react";
import { FaLeaf, FaRocket, FaBuilding } from "react-icons/fa";

const iconMap = {
  Basic: <FaLeaf size={40} color="#4CAF50" />,
  Pro: <FaRocket size={40} color="#0078d7" />,
  Enterprise: <FaBuilding size={40} color="#FF9800" />
};

const descriptionMap = {
  Basic: "Perfect for individuals just getting started.",
  Pro: "Ideal for growing teams who need more features.",
  Enterprise: "Best for large organizations with advanced needs."
};

function Pricing({onSubscribe}) {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5100/api/plans")
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(err => console.error("Error fetching plans:", err));
  }, []);

  const handleSubscribe = async (planName) => {
    const token = localStorage.getItem("token"); // use token later for auth
    const response = await fetch("http://localhost:5100/api/plans/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` })
      },
      body: JSON.stringify(planName)
    });
    const result = await response.json();
    alert(`Subscribed to ${result.plan}! Transaction ID: ${result.transactionId}`);
  };

  return (
    <div>
      <h1 className="pricing-title">Choose the plan that fits you best</h1>
      <div className="pricing-container">
        {plans.map(plan => (
          <div className="pricing-box" key={plan.name}>
            <div className="icon">{iconMap[plan.name]}</div>
            <h2>{plan.name}</h2>
            <p className="description">{descriptionMap[plan.name]}</p>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button onClick={() => onSubscribe(plan.name)}>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;