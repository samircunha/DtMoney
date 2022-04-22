import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { Server } from "../server/server";

Server();

const TransactionsContext = createContext();

export function Transactions({ children }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    try {
      (async function getTransactions() {
        const response = await axios.get("http://localhost:3000/api");

        setTransactions(response.data.transactions);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setNewTransaction = async (newTransaction) => {
    const response = await axios.post("http://localhost:3000/api", newTransaction);

    const {transaction} = response.data;

    setTransactions((transactions) => [...transactions, transaction])
  };

  return (
    <TransactionsContext.Provider value={{ transactions, setNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
