import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Transactions } from "./hooks/useTransactions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Transactions>
      <App />
    </Transactions>
  </React.StrictMode>
);
