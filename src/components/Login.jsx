import kaltura from "kaltura-client";

import React, { useState } from "react";
const config = new kaltura.Configuration();
config.serviceUrl = "https://www.kaltura.com";
const client = new kaltura.Client(config);

let partnerId = 0;
let expiry = 86400;
let privileges = "*";
let otp = "";

export default function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    // let loginId = "leeyahav018@gmail.com";
    // let password = "eLy3gptre4#"
    kaltura.services.user
      .loginByLoginId(loginId, password, partnerId, expiry, privileges, otp)
      .execute(client)
      .then((result) => {
        // console.log(result);
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
          setLoginId(e.target.value);
        }}
        type="text"
      />
      <input
        className="password-input"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
      />
      <button className="login-btn" onClick={login}>
        login
      </button>
    </div>
  );
}
// https://www.youtube.com/watch?v=mWJKBNEkJYQ&ab_channel=DeepHouseNation
