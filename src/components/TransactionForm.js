import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Ganho"); // Adicionar estado para o tipo de transação

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      const signedAmount =
        type === "Ganho" ? parseFloat(amount) : -parseFloat(amount);
      addTransaction({
        id: Date.now(),
        description,
        amount: signedAmount,
      });
      setDescription("");
      setAmount("");
      setType("Ganho"); // Resetar o tipo para Ganho
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
      <div>
        <label>Tipo</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Ganho">Ganho</option>
          <option value="Gasto">Gasto</option>
        </select>
      </div>
      <button type="submit">Adicionar Transação</button>
    </form>
  );
};

export default TransactionForm;
