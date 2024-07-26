// src/App.js
import React, { useState, useEffect } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Carregar transações do localStorage ao iniciar
  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Salvar transações no localStorage sempre que a lista de transações mudar
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const editTransaction = (id, newDescription, newAmount) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, description: newDescription, amount: newAmount }
          : transaction
      )
    );
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const calculateBalance = () => {
    return transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
  };

  return (
    <div className="app">
      <h1>Gerenciador Financeiro</h1>
      <Balance balance={calculateBalance()} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        editTransaction={editTransaction}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;
