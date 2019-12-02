import React, { useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import toast from "toasted-notes";
import { login } from "../../utils/auth";

import NavigationBar from "../../components/NavigationBar";
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
    console.log(evt);
  };

  return (
    <div>
      <NavigationBar />
      <div className="w-full min-h-screen flex mt-16 mb-0">
        <div className="w-3/5 bg-white flex flex-col items-center justify-center text-sm text-primarydark">
          <div className="flex flex-col items-center">
            <div className="text-center my-4">
              <h1 className="text-5xl font-semibold text-secondary">
                Forgot Password?
              </h1>
              <p className="text-base font-medium text-primarydark">
                Enter the email address associated with your account.
              </p>
            </div>
            <div className="w-full m-4 p-4">
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
                    <a className="underline">
                      Create an account for your business.
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-secondary h-screen fixed right-0 top-0 z-20">
          <img
            src="https://images.unsplash.com/photo-1553531384-fdedae5009ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
