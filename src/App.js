import React from "react";
import "./App.css";
import Header from "./components/Header";
import Spending from "./components/Spending";
import Budget from "./components/Budget";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Spending />
        <Budget />
        <TransactionHistory />
      </div>
    </div>
  );
}

export default App;
