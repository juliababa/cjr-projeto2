import React from 'react';
import Header from '../../Components/Header';
import BackOfficeMenu from '../../Components/Header/BackOfficeMenu';
import Table from '../../Components/Table';

function App() {
  return (
    <div>
      <Header></Header>
      <BackOfficeMenu/>
      <Table/>
    </div>
  )
}

export default App;