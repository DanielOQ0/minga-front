import React from "react";
import "./NavBar.css";
import logo from "../../media/Logo.png";
import img from "../../media/Menu.png";
import NavMenu from "../NavMenu/NavMenu.jsx"
import { useState } from "react";

export default function ButtonIndex() {
  const [render, setRender]=useState(false)
  const handleRender = ()=>{
    setRender(!render)
  }
  return (
    <div className="navbar">
      <button id="button-navbar" onClick={handleRender}>
        <img src={img} alt="" />
      </button>
      <img id="logo-navbar" src={logo} alt="Logo" />
      {render&&<NavMenu render={handleRender} />}
    </div>
  );
}
