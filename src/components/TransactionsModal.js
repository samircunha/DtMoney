import React from "react";
import ReactModal from "react-modal";
import { useTransactions } from "../hooks/useTransactions";

export function TransactionsModal() {
  const { isModalOpen, setIsModalOpen } = useTransactions();

  const ModalStyles = {
    content: {
        backgroundColor: "black"
    }
  }

  return (
    <ReactModal isOpen={isModalOpen}>
      <h1>Hello</h1>
    </ReactModal>
  );
}
