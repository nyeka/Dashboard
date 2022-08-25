import React from "react";
import Chart from "../Components/Chart/Chart";
import Dashboard from "../Components/Dashboard/Dashboard";
import Order from "../Components/Order/Order";
import Progres from "../Components/Progres/Progres";
import { data } from "../Components/utils/data";

const Main = () => {
  return (
    <div>
      <Dashboard />
      <Progres />
      <Chart data={data} />
      <Order />
    </div>
  );
};

export default Main;
