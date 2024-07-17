import React from "react";
import "./App.css";
import Header from "./components/Header";
import Spending from "./components/Spending";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Spending />
        <AddTransaction />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
