import React from "react";

import Entradas from "../assets/Entradas.png";
import Saidas from "../assets/Saidas.png";
import Total from "../assets/Total.png";

import { useTransactions } from "../hooks/useTransactions";

export function Flow() {
  const { transactions } = useTransactions();
  let incomes = 0;
  let outcomes = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === "income") incomes += transaction.price;
    else outcomes += transaction.price;
  });
  let total = incomes - outcomes;

  return (
    <div className="flow">
      <div className="income">
        <p>
          <span>Entradas</span> <img alt="entradas" src={Entradas}></img>
        </p>
        <div>
          {incomes.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
      <div className="outcome">
        <p>
          <span>Saídas</span> <img alt="saidas" src={Saidas}></img>
        </p>
        <div>
          {outcomes.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
      <div className="total">
        <p>
          <span>Saídas</span> <img alt="total" src={Total}></img>
        </p>
        <div>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
    </div>
  );
}
