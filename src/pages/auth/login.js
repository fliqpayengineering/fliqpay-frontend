import React, { useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import toast from "toasted-notes";
import { login } from "../../utils/auth";

import { AuthLayout } from "../../components/Layout";

import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import CheckBox from "../../components/Form/CheckBox";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import * as ROUTES from "../../constants/routes";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
    error: ""
  });

  const handleSubmit = async evt => {
    evt.preventDefault();

    console.log("submit");
    login({ token: "temp_token" });
  };

  const handleChange = evt => {
    // evt.persist();
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
    // toast.notify(<Alert title="Incorrect password" message="Blah blah" />);
  };

  return (
    <AuthLayout
      title="Welcome Back."
      subtitle="Log in to your account."
      sideImage="https://images.unsplash.com/photo-1553531384-fdedae5009ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      columnSize="3/4"
    >
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          title="Email Address"
          type="email"
          placeholder="Enter your business email"
          wrapperClass="mb-6"
          value={loginData.email}
          onChange={handleChange}
        />

        <Input
          name="password"
          title="Password"
          type="password"
          placeholder="Enter your password"
          wrapperClass="mb-6"
          value={loginData.password}
          onChange={handleChange}
        />
        <CheckBox
          name="keepSignedIn"
          value={loginData.keepSignedIn}
          onChange={evt =>
            setLoginData({
              ...loginData,
              [evt.target.name]: !loginData[evt.target.name]
            })
          }
          title="Keep me signed in"
          className="mb-6"
        />

        <Button text="Log in" width="full" className="mb-6" />
        <div className="text-center mb-6">
          <Link href={ROUTES.AUTH.FORGOTPASSWORD}>
            <a className="underline text-secondary">Forgot login details?</a>
          </Link>
        </div>
        <div className="py-5 px-4 bg-blue-100 rounded font-medium">
          <h2 className="text-secondary text-base">New to fliqpay?</h2>
          <Link href={ROUTES.AUTH.FORGOTPASSWORD}>
            <a className="underline">Create an account for your business.</a>
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
