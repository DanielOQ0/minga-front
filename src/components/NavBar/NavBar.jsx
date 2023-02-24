import React from "react";
import "./NavBar.css";
import logo from "../../media/Logo.png";
import img from "../../media/Menu.png";
export default function ButtonIndex() {
  return (
    <div className="navbar">
      <button id="button-navbar">
        <img src={img} alt="" srcset="" />
      </button>
      <img id="logo-navbar" src={logo} alt="Logo" srcset="" />
    </div>
  );
}
