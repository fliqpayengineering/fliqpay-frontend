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

const ForgotPassword = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    error: ""
  });

  const handleSubmit = async evt => {
    evt.preventDefault();

    console.log("forgot");
  };

  const handleChange = evt => {
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter the email associated with your account."
      icon="/images/forgot-password.svg"
      sideImage="https://images.unsplash.com/photo-1553531384-fdedae5009ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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

        <Button text="Resend password" width="full" className="mb-6" />
        <div className="text-center mb-6">
          Still need help?{" "}
          <Link href={ROUTES.AUTH.FORGOTPASSWORD}>
            <a className="underline text-secondary">Contact support</a>
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

export default ForgotPassword;
