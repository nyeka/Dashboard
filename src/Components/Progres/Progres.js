import React from "react";
import "./style.scss";
import logo from "../Images/logo.png";

const Progres = () => {
  return (
    <section id="progres">
      <div className="container">
        <div className="card">
          <div className="text-card">
            <span>Today Sales</span>
            <h3>$20.4K</h3>
            <p>We have sold 123 items</p>
          </div>
          <img src={logo} alt="ini progres" />
        </div>
        <div className="card">
          <div className="text-card">
            <span >Todays Revenue</span>
            <h3>$8.2K</h3>
            <p>Availabale to payout</p>
          </div>
          <img src={logo} alt="ini progres" />
        </div>
        <div className="card">
          <div className="text-card">
            <span>In Escrow</span>
            <h3>$18.2K</h3>
            <p>Availabale to payout</p>
          </div>
          <img src={logo} alt="ini progres" />
        </div>
      </div>
    </section>
  );
};

export default Progres;
