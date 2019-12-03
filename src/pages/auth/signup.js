import React, { useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import toast from "toasted-notes";
import { login } from "../../utils/auth";

import { AuthLayout, Grid } from "../../components/Layout";

import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import CheckBox from "../../components/Form/CheckBox";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import * as ROUTES from "../../constants/routes";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    tosAgree: false,
    business_name: "",
    business_email: "",
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    error: null
  });

  const handleSubmit = async evt => {
    evt.preventDefault();

    console.log("submit");
  };

  const handleChange = evt => {
    setSignupData({ ...signupData, [evt.target.name]: evt.target.value });
  };

  return (
    <AuthLayout
      title="Create an account."
      subtitle="Log in to your account."
      sideImage="https://images.unsplash.com/photo-1553531384-fdedae5009ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      columnSize="3/4"
      innerColumnSize="2/3"
    >
      <form onSubmit={handleSubmit}>
        <Grid columns={2} gap="1.5rem 1rem" className="mb-4">
          <Input
            name="business_name"
            title="Business Name"
            type="text"
            placeholder="Enter your business name"
            value={signupData.business_name}
            onChange={handleChange}
          />
          <Input
            name="email"
            title="Business Email"
            type="email"
            placeholder="Enter your business email"
            value={signupData.email}
            onChange={handleChange}
          />
          <Input
            name="first_name"
            title="First Name"
            type="text"
            placeholder="Kola"
            value={signupData.first_name}
            onChange={handleChange}
          />
          <Input
            name="last_name"
            title="Last Name"
            type="text"
            placeholder="Igwe"
            value={signupData.last_name}
            onChange={handleChange}
          />
          <Input
            name="phone"
            title="Phone Number"
            type="tel"
            placeholder="+234 807 000 0000"
            value={signupData.phone}
            onChange={handleChange}
          />
          <Select
            title="Country"
            name="country"
            options={["Nigeria", "United Kingdom"]}
            placeholder="Select country"
            value={signupData.country}
            handleChange={handleChange}
          />
        </Grid>

        <div className="flex flex-col items-center my-6">
          <CheckBox
            className="my-3"
            title="I agree to Fliqpay's Terms of service and Privacy Policy"
            name="tosAgree"
            handleChange={handleChange}
          />
          <Button text="Create account" width="sm" className="my-3" />
          <div className="my-3">
            Have an account already?{" "}
            <Link href={ROUTES.AUTH.LOGIN}>
              <a className="underline text-secondary">
                Log in to your account?
              </a>
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
