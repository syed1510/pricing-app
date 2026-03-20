import React, { useState } from "react";

const CheckoutModal = ({ plan, onClose, onSuccess }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock payment validation
    if (cardNumber && expiry && cvv) {
      // Simulate backend call
      setTimeout(() => {
        alert(`Payment successful! You subscribed to ${plan} plan.`);
        onSuccess(plan);
        onClose();
      }, 1000);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Checkout - {plan} Plan</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Pay</button>
        </form>
        <button onClick={onClose} style={styles.cancel}>Cancel</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
    justifyContent: "center", alignItems: "center"
  },
  modal: {
    background: "#fff", padding: "20px", borderRadius: "8px", width: "300px"
  },
  input: {
    display: "block", width: "100%", marginBottom: "10px", padding: "8px"
  },
  button: {
    background: "#4CAF50", color: "#fff", border: "none",
    padding: "10px", width: "100%", cursor: "pointer"
  },
  cancel: {
    marginTop: "10px", background: "#ccc", border: "none",
    padding: "8px", width: "100%", cursor: "pointer"
  }
};

export default CheckoutModal;