import React from "react";

import entradas from "../assets/Entradas.png";
import saidas from "../assets/Saidas.png";
import total from "../assets/Total.png";

import { useTransactions } from "../hooks/useTransactions";

export function Flow() {
  const { transactions } = useTransactions();

  return (
    <div className="flow">
      <div className="income">
        <p>
          <span>Entradas</span> <img alt="entradas" src={entradas}></img>
        </p>
        <div>R$ 12.000,00</div>
      </div>
      <div className="outcome">
        <p>
          <span>Saídas</span> <img alt="saidas" src={saidas}></img>
        </p>
        <div>R$ 5.200,00</div>
      </div>
      <div className="total">
        <p>
          <span>Total</span> <img alt="total" src={total}></img>
        </p>
        <div>R$ 12.300,00</div>
      </div>
    </div>
  );
}
