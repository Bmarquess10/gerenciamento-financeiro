// src/components/Balance.js
import React from "react";

const Balance = ({ balance }) => {
  return (
    <div className="balance">
      <h2>Saldo Atual: R${balance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
