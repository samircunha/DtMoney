import React from "react";
import { useTransactions } from "../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.date}>
              <td>{transaction.name}</td>
              <td
                style={
                  transaction.type === "income"
                    ? { color: "#33CC95" }
                    : { color: "red" }
                }
              >
                {transaction.type === "outcome" ? "- " : ""}
                {transaction.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
