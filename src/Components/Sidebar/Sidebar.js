import React from "react";
import rel from "../Images/rel.svg";
import "./style.scss";
import arrow from "../Images/arrow-down.svg";
import { data, menuout } from "./data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "Bold" : "normal",
      color: isActive ? "#fff" : "#808191",
      backgroundColor: isActive ? "#1F8B4D" : "#fff",
    };
  };
  return (
    <section id="sidebar">
      <div className="container-menu">
        <div className="logo">
          <div className="logo-text">
            <div className="logo-img">
              <img src={rel} alt="home logo" />
            </div>
            <span>Dash-it</span>
          </div>
          <div className="arrow">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="menu">
          <ul>
            {data.map((item, index) => {
              return (
                <NavLink style={navstyle} to={item.link} key={index}>
                  <div className="link" style={{}}>
                    <img src={item.img} alt="dashbord" />
                    <li>{item.title}</li>
                  </div>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="bottom-menu">
        <ul>
          {menuout.map((item, index) => {
            return (
              <NavLink to={item.link} key={index}>
                <div className="menu">
                  <img src={item.img} alt="setting" />
                  <li>{item.title}</li>
                </div>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
