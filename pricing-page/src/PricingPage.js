import React, { useState } from "react";
import Pricing from "./Pricing";
import CheckoutModal from "./CheckoutModal";

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
  };

  const handleClose = () => {
    setSelectedPlan(null);
  };

  const handleSuccess = (plan) => {
    console.log(`User subscribed to ${plan}`);
    // Later: call backend API here
  };

  return (
    <div>
      <Pricing onSubscribe={handleSubscribe} />
      {selectedPlan && (
        <CheckoutModal
          plan={selectedPlan}
          onClose={handleClose}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
};

export default PricingPage;