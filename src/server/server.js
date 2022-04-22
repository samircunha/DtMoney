import { createServer } from "miragejs";

export function Server() {
  createServer({
    routes() {
      this.get("http://localhost:3000/api", () => ({
        transactions: [
          {
            name: "Desenvolvimento de Site",
            price: 'R$ 12.000,00',
            category: "Venda",
            date: "12/04/2022",
            type: "income",
          },
          {
            name: "Hamburguer",
            price: 'R$ 59,00',
            category: "Alimentação",
            date: "15/04/2022",
            type: "outcome",
          },
        ],
      }))
      this.post('http://localhost:3000/api', (schema, request) => {
          const newTransaction = JSON.parse(request.requestBody)

          return {transaction: newTransaction}
      });
    },
  });
}
