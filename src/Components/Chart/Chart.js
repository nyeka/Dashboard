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
          <span>5% than last month</span>
        </div>
        <div className="">
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
        <div>Most Sold Items</div>
      </div>
    </section>
  );
};

export default Chart;
