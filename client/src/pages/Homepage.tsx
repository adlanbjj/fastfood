import React, { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import './Homepage.css';
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  const milkshake1 = require("../assets/images/milkshake_1.png");
  const milkshake2 = require("../assets/images/milkshake_2.png");
  const milkshake3 = require("../assets/images/milkshake_3.png");
  const milkshake4 = require("../assets/images/milkshake_4.png");
  const milkshake5 = require("../assets/images/milkshake_5.png");
  const milkshake6 = require("../assets/images/milkshake_6.png");

  const [selectedId, setSelectedId] = useState(null);

  const milkshakes = [
    {
      id: 1,
      name: "Dragon Fire",
      flavor: "Strawberry",
      calories: 140,
      price: 10,
      image: milkshake1,
    },
    {
      id: 2,
      name: "Minty Madness",
      flavor: "Mint",
      calories: 160,
      price: 12,
      image: milkshake2,
    },

    {
      id: 3,
      name: "Choco Blast",
      flavor: "Chocolate",
      calories: 200,
      price: 15,
      image: milkshake3,
    },
    {
      id: 4,
      name: "Vanilla Dream",
      flavor: "Vanilla",
      calories: 180,
      price: 11,
      image: milkshake4,
    },
  ];

  return (
    <div className="homepage-cont">
      <Sidebar />
      <Menu drinks={milkshakes} />
    </div>
  );
};

export default Homepage;
