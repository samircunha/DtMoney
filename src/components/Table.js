import React from "react";

export function Table() {
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
      <tr>
        <td>Desenvolvimento de Site</td>
        <td>R$ 12.000,00</td>
        <td>Venda</td>
        <td>12/04/2022</td>
      </tr>
      <tr>
        <td>Hamburguer</td>
        <td>R$ 59,00</td>
        <td>Alimentação</td>
        <td>13/04/2022</td>
      </tr>
      </tbody>
    </table>
  );
}
