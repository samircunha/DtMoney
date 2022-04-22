import React, { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Flow } from "./components/Flow";
import { TransactionsTable } from "./components/TransactionsTable";
import { TransactionsModal } from "./components/TransactionsModal";
import "./styles/global.scss";
import "./styles/header.scss";
import "./styles/flow.scss";
import "./styles/transactionsTable.scss";
import "./styles/transactionsModal.scss";

Modal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <Header toggleModal={toggleModal} />
      <Flow />
      <TransactionsTable />
      <TransactionsModal isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    </div>
  );
}

export default App;
