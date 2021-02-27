import React, { useContext } from "react";
import Ayman from "../AymanContext";

const Home = () => {
  let home = useContext(Ayman);
  console.log(home);
  return (
    <div>
      <h1> here is home </h1>
      <h5> first console from {home}</h5>
    </div>
  );
};

export default Home;
