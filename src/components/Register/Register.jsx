import React from "react";
import "./Register.css";
import imgRegister from "../../media/Rectangle81.png";
import imgName from "../../media/profile.png";
import imgEmail from "../../media/email.png";
import imgPass from "../../media/lock1.png";
import imgGoogle from '../../media/Google.png'
import InputRegister from "../InputRegister/InputRegister";
import {useRef} from "react";
import axios from "axios";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

export default function Register() {
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let confirmPass= useRef();
  let emailSubcribe = useRef();
  let form = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    let url = "http://192.168.20.29:8080/users";
    let data = {
      [name.current.name]: name.current.value,
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
      [emailSubcribe.current.name]: emailSubcribe.current.checked,
    };
    if(password.current.value === confirmPass.current.value){
      try {
        await axios.post(url, data);
      } catch (error) {
        console.log(error);
        console.log("ocurrio un error");
      }
      form.current.reset();
      alert("Formulario enviado correctamente")
    }else {
      alert("Contraseñas no coinciden")
    }
  }
  return (
    <div className="register">
      <div id="container-form">
        <form ref={form} id="form-register" onSubmit={handleSubmit}>
          <p id="title-register">Welcome!</p>
          <p id="subtitle-register">
            Discover manga, manhua and manhwa, track your progress, have fun,
            read manga.
          </p>
          <InputRegister
            reft={name}
            name="name"
            className="input1"
            logo={imgName}
            legend="Name"
            placeHolder="Krowl Bell"
            type="text"
          />
          <InputRegister
            reft={email}
            name="mail"
            className="input2"
            logo={imgEmail}
            legend="Email"
            placeHolder="Dragonballz@Krowl.com"
            type="email"
          />
          <InputRegister
            reft={password}
            name="password"
            className="input2"
            logo={imgPass}
            legend="Password"
            placeHolder="••••••••••••••••••••"
            type="password"
          />
          <InputRegister
          reft={confirmPass}
            className="input2"
            logo={imgPass}
            legend="Confirm password"
            placeHolder="••••••••••••••••••••"
            type="password"
          />
          <div id="container-checkbox">
            <input
              ref={emailSubcribe}
              className="input-check"
              type="checkbox"
              id="sendNoti"
              name="mail_subscribe"
            />
            <label id="text-label" htmlFor="sendNoti">Send notification to my email</label>
          </div>
          <input
            type="submit"
            id="form-button"
            value="Sign up"
            name="submit"
          />
          <button id="google-button">
            <img src={imgGoogle} id="google-logo" alt="icono-google" /> Sign in
            whit google{" "}
          </button>
          <p className="text-register">
            Already have an account{" "}
            <a href="#" className="form-anchor">
              Log in
            </a>
          </p>
          <p className="text-register">
            Go back to{" "}
            <a href="#" className="form-anchor">
              Home page
            </a>
          </p>
        </form>
      </div>
      <img id="image-register" src={imgRegister} alt="FondoRegister" />
    </div>
  );
}
