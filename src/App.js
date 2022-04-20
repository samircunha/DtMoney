import React from 'react';
import { Header } from './components/Header';
import { Flow } from './components/Flow';
import { Table } from './components/Table';
import './styles/global.scss';
import './styles/header.scss';
import './styles/flow.scss';
import './styles/table.scss';

function App() {
  return (
    <div>
      <Header></Header>
      <Flow></Flow>
      <Table></Table>
    </div>
  );
}

export default App;
