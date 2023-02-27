import React from "react";
import "./InputRegister.css";

export default function InputRegister(props) {
  return (
    <div className={props.className}>
      <fieldset className="input-register">
        <legend className="legend-register">{props.legend}</legend>
        <input
          ref={props.reft}
          name={props.name}
          type={props.type}
          placeholder={props.placeHolder}
          className="input"
          required
        />
        <img
          className="profile-register"
          src={props.logo}
          alt="profile"
          srcset=""
        />
      </fieldset>
    </div>
  );
}
