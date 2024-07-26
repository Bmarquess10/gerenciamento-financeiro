// src/components/TransactionForm.js
import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addTransaction({
        id: Date.now(),
        description,
        amount: parseFloat(amount),
      });
      setDescription("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descrição</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Valor</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar Transação</button>
    </form>
  );
};

export default TransactionForm;
