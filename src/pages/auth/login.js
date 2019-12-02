import React, { useState } from "react";
import Link from "next/link";
import NavigationBar from "../../components/NavigationBar";
import fetch from "isomorphic-unfetch";
import { login } from "../../utils/auth";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import * as ROUTES from "../../constants/routes";

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
      <NavigationBar />
      <div className="w-full h-screen flex ">
        <div className="w-3/5 bg-white flex flex-col items-center justify-center text-sm text-primarydark overflow-y-scroll">
          <div className="flex flex-col items-center w-1/2 h-lg">
            <div className="text-center my-4">
              <h1 className="text-5xl font-bold text-secondary">
                Welcome Back.
              </h1>
              <p className="text-base font-semibold text-primarydark">
                Sign in to continue where you left off.
              </p>
            </div>
            <div className="w-full m-4 p-4">
              <form>
                <Input
                  name="email"
                  title="Email Address"
                  type="email"
                  placeholder="Enter your business email"
                  wrapperClass="mb-6"
                />

                <Input
                  name="password"
                  title="Password"
                  type="password"
                  placeholder="Enter your password"
                  wrapperClass="mb-6"
                />
                <Button text="Log in" width="full" className="mb-6" />
                <div className="text-center mb-6">
                  <Link href={ROUTES.AUTH.FORGOTPASSWORD}>
                    <a className="underline">Forgot login details?</a>
                  </Link>
                </div>
                <div className="py-5 px-4 bg-blue-100 rounded font-semibold">
                  <h2 className="text-secondary text-base">New to fliqpay?</h2>
                  <Link href={ROUTES.AUTH.FORGOTPASSWORD}>
                    <a className="underline">
                      Create an account for your business.
                    </a>
                  </Link>
                </div>

                {/* <div className="flex flex-col text-primarydark text-sm">
                  <label class="text-gray-500 ">
                    <input class="mr-2 leading-tight" type="checkbox" />
                    <span class="text-sm">Send me your newsletter!</span>
                  </label>
                </div> */}
              </form>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-secondary h-screen fixed right-0 top-0 relative">
          <img
            src="https://images.unsplash.com/photo-1553531384-fdedae5009ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </div>
  );
};

export default Login;
