import kaltura from "kaltura-client";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
const config = new kaltura.Configuration();
config.serviceUrl = "https://www.kaltura.com";
const client = new kaltura.Client(config);

let partnerId = 0;
let expiry = 86400;
let privileges = "*";
let otp = "";

export default function Login() {
  const history = useHistory();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  function login() {
    kaltura.services.user
      .loginByLoginId(loginId, password, partnerId, expiry, privileges, otp)
      .execute(client)
      .then((result) => {
        console.log(result);
        history.push("/media-entries");
      })
      .catch((e) => {
        console.log(e.message);
        setAlert(e.message);
      });

    // console.log(email, password);
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        className="email-input"
        placeholder="email"
        onChange={(e) => {
          setAlert("");
          setLoginId(e.target.value);
        }}
        type="text"
      />
      <input
        className="password-input"
        placeholder="password"
        onChange={(e) => {
          setAlert("");
          setPassword(e.target.value);
        }}
        type="text"
      />
      <button className="login-btn" onClick={login}>
        login
      </button>
      <p className="alert">{alert}</p>
    </div>
  );
}
