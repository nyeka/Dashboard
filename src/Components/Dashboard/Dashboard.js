import React from "react";
import "./style.scss";
import arrow from "../Images/arrow-d.svg";

const Dashboard = () => {
  return (
    <section id="dashboard">
      <div className="container">Dashboard</div>
      <div className="tanggal">
        <p>28 jan, 2021 - 28 Dec, 2021</p>
        <img src={arrow} alt="arrow" />
      </div>
    </section>
  );
};

export default Dashboard;
