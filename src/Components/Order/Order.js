import React from "react";
import "./style.scss";
import { listdata } from "./data";

const Order = () => {
  return (
    <section id="order">
      <p>Latest Order</p>
      <ul>
        <div className="container">
          <li>Products</li>
          <li>Order ID</li>
          <li>Date</li>
          <li>Customer name</li>
          <li>Status</li>
          <li>Amount</li>
          <li>Action</li>
        </div>
        <div className="transaction-container">
          {listdata.map((item, index) => {
            return (
              <div className="container-2" key={index}>
                <li>{item.products}</li>
                <li>{item.OrderId}</li>
                <li>{item.date}</li>
                <li>{item.custname}</li>
                <li>{item.status}</li>
                <li>{item.amount}</li>
                <li>{item.actions}</li>
              </div>
            );
          })}
        </div>
      </ul>
    </section>
  );
};

export default Order;
