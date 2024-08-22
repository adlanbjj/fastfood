import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-cont">
      <div className="top-block">
        <h2>Nos menus</h2>
      </div>
      <div className="second-block">
        <h4>Nos Burgers</h4>
        <h4>Nos Salades</h4>
        <h4>Petite faim</h4>
        <h4>Nos Boissons</h4>
        <h4 id="nos-deserts">Nos Deserts</h4>
        <h4>Nos Frites</h4>
      </div>
    </div>
  );
};

export default Sidebar;
