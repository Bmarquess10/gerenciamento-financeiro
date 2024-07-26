// src/components/TransactionList.js
import React, { useState } from "react";

const TransactionList = ({
  transactions,
  editTransaction,
  deleteTransaction,
}) => {
  const [isEditing, setIsEditing] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const startEditing = (transaction) => {
    setIsEditing(transaction.id);
    setNewDescription(transaction.description);
    setNewAmount(transaction.amount);
  };

  const handleEdit = (id) => {
    editTransaction(id, newDescription, parseFloat(newAmount));
    setIsEditing(null);
    setNewDescription("");
    setNewAmount("");
  };

  return (
    <div className="transaction-list">
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {isEditing === transaction.id ? (
              <>
                <input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <input
                  type="number"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                />
                <button onClick={() => handleEdit(transaction.id)}>
                  Salvar
                </button>
              </>
            ) : (
              <>
                <span>
                  {transaction.description} - R${transaction.amount.toFixed(2)}
                </span>
                <button onClick={() => startEditing(transaction)}>
                  Editar
                </button>
                <button onClick={() => deleteTransaction(transaction.id)}>
                  Remover
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
