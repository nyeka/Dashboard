import React from "react";
import "./style.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import arrow from "../Images/Arrow.svg";

const Chart = ({ data }) => {
  return (
    <section id="chart">
      <div className="container">
        <div className="text-above">
          <p>Total Revenue</p>
          <ul>
            <li>Profit</li>
            <li>Lost</li>
          </ul>
        </div>
        <div className="text-profit">
          <h3>$50.4K</h3>
          <div className="text-arrow">
            <img src={arrow} alt="arrow" />
            <span>5% than last month</span>
          </div>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Profit" fill="#1F8B4D" />
              <Bar dataKey="Lost" fill="#E3E7FC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="chart-container">
        <h3>Most Sold Items </h3>
        <div className="sold">
          <div class="skill_bar">
            <div class="info">
              <p>Iphone 13 Pro</p>
              <p>70%</p>
            </div>
            <div class="bar">
              <span class="iphone"></span>
            </div>
          </div>
          <div class="skill_bar">
            <div class="info">
              <p>Apple Watch</p>
              <p>40%</p>
            </div>
            <div class="bar">
              <span class="apple"></span>
            </div>
          </div>
          <div class="skill_bar">
            <div class="info">
              <p>Airpods</p>
              <p>60%</p>
            </div>
            <div class="bar">
              <span class="airpods"></span>
            </div>
          </div>
          <div class="skill_bar">
            <div class="info">
              <p>Machbook Pro</p>
              <p>80%</p>
            </div>
            <div class="bar">
              <span class="machbok"></span>
            </div>
          </div>
          <div class="skill_bar">
            <div class="info">
              <p>Others</p>
              <p>20%</p>
            </div>
            <div class="bar">
              <span class="other"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
