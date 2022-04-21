import React from "react";
import Modal from "react-modal";
import close from "../assets/Close.png";
import entradas from "../assets/Entradas.png";
import saidas from "../assets/Saidas.png";

export function TransactionsModal({ isModalOpen, handleToggleModal }) {
  const handleRequestClose = () => {
    handleToggleModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={handleRequestClose}
    >
      <button onClick={handleRequestClose} className="react-modal-close">
        <img src={close}></img>
      </button>
      <div className="react-modal-transaction">
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Nome"></input>
        <input type="number" placeholder="Preço"></input>
        <div>
          <button className="income-button">
            <img src={entradas}></img>
            <p>Entrada</p>
          </button>
          <button className="outcome-button">
            <img src={saidas}></img>
            <p>Saída</p>
          </button>
        </div>
        <input type="text" placeholder="Categoria"></input>
        <button className="register-button">Cadastrar</button>
      </div>
    </Modal>
  );
}
