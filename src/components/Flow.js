import React from "react";

import entradas from "../assets/Entradas.png";
import saidas from "../assets/Saidas.png";
import total from "../assets/Total.png";

export function Flow() {
  return (
    <div className="flow">
      <div className='income'>
        <p>
          <span>Entradas</span> <img src={entradas}></img>
        </p>
        <div>R$ 17.500,00</div>
      </div>
      <div className='outcome'>
        <p>
          <span>Saídas</span> <img src={saidas}></img>
        </p>
        <div>R$ 5.200,00</div>
      </div>
      <div className='total'>
        <p>
          <span>Total</span> <img src={total}></img>
        </p>
        <div>R$ 12.300,00</div>
      </div>
    </div>
  );
}
