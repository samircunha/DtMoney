import React from 'react';
import { Header } from './components/Header';
import { Flow } from './components/Flow';
import { TransactionsTable } from './components/TransactionsTable';
import { TransactionsModal } from './components/TransactionsModal';
import './styles/global.scss';
import './styles/header.scss';
import './styles/flow.scss';
import './styles/table.scss';
import './styles/transactionsModal.scss';

function App() {
  return (
    <div>
      <Header />
      <Flow />
      <TransactionsTable />
      <TransactionsModal />
    </div>
  );
}

export default App;
