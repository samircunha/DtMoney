import React, { useState } from "react";
import Modal from "react-modal";

import close from "../assets/Close.png";
import entradas from "../assets/Entradas.png";
import saidas from "../assets/Saidas.png";

import { useTransactions } from "../hooks/useTransactions";

export function TransactionsModal({ isModalOpen, toggleModal }) {
  const { setNewTransaction } = useTransactions();
  const [selectedButton, setSelectedButton] = useState(false);

  const handleSelectButton = (type) => {
    setSelectedButton(type);
  };

  const handleRegisterTransaction = () => {
    if (!selectedButton)
      return alert("Selecione uma opção de entrada ou saída!");

    const [{ value: name }, { value: price }, { value: category }] =
      document.querySelectorAll("input");

    setNewTransaction({
      name,
      price: Number(price),
      category,
      type: selectedButton,
      date: new Date().toLocaleDateString(),
    });

    setSelectedButton(false);
    toggleModal();
  };

  const handleRequestClose = () => {
    toggleModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={handleRequestClose}
    >
      <button onClick={handleRequestClose} className="react-modal-close">
        <img alt='close' src={close}></img>
      </button>
      <div className="react-modal-transaction">
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Nome"></input>
        <input type="number" placeholder="Preço"></input>
        <div>
          <button
            className="income-button"
            onClick={() => handleSelectButton("income")}
            style={
              selectedButton === "income"
                ? { backgroundColor: "#12a4544d" }
                : { backgroundColor: "#FFFFFF" }
            }
          >
            <img alt='entradas' src={entradas}></img>
            <p>Entrada</p>
          </button>
          <button
            className="outcome-button"
            onClick={() => handleSelectButton("outcome")}
            style={
              selectedButton === "outcome"
                ? { backgroundColor: "#e62e4d64 " }
                : { backgroundColor: "#FFFFFF" }
            }
          >
            <img alt='saidas' src={saidas}></img>
            <p>Saída</p>
          </button>
        </div>
        <input type="text" placeholder="Categoria"></input>
        <button className="register-button" onClick={handleRegisterTransaction}>
          Cadastrar
        </button>
      </div>
    </Modal>
  );
}
