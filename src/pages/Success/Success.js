// src/components/PaymentSuccess.js

import React from "react";
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md"; // Import icon từ react-icons
import "./PaymentSuccess.css"; // Đảm bảo rằng bạn đã tạo file CSS

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="icon-container">
        <MdCheckCircle size={100} color="green" />
      </div>
      <h1>Payment Successful!</h1>
      <p>Your payment was processed successfully.</p>
      <p>Thank you for your purchase!</p>
      <Link to="/" className="back-home-link">
        Go to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
