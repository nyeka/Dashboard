import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Dashbord";
import Payment from "./layouts/Payment";
import Statistic from "./layouts/Statistic";
import Product from "./layouts/Product";
import Customer from "./layouts/Customer";
import Transaction from "./layouts/Transaction";
import Message from "./layouts/Message";

const App = () => {
  return (
    <section id="app">
      <div>
        <Sidebar />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/products" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="/messages" element={<Message />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
