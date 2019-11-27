import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import { login } from "../../utils/auth";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    error: ""
  });

  const handleSubmit = async evt => {
    evt.preventDefault();

    console.log("submit");
    login({ token: "temp_token" });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          name="email"
          type="email"
          value={loginData.email}
          onChange={evt =>
            setLoginData({ ...loginData, email: evt.target.value })
          }
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={evt =>
            setLoginData({ ...loginData, password: evt.target.value })
          }
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
