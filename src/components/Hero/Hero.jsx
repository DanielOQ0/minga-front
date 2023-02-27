import React from "react";
import Background from "../Backgroud/Background";
import DesTrigun from "../DesTrigun/DesTrigun";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <DesTrigun />
      <Background />
    </div>
  );
}
