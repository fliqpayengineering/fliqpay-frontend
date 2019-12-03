import React, { useState } from "react";
import Link from "next/link";

import { AuthLayout } from "../../components/Layout";
import * as ROUTES from "../../constants/routes";

const CheckEmail = () => {
  return (
    <AuthLayout
      title="Check your inbox."
      subtitle="A password reset email has been sent to your inbox. Kindly click the link in the email to continue."
      icon="/images/forgot-password-check-email.svg"
      sideImage="https://images.unsplash.com/photo-1553531384-fdedae5009ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <div className="text-center mb-6">
        Still need help?{" "}
        <Link href={ROUTES.AUTH.FORGOTPASSWORD}>
          <a className="underline text-secondary">Contact support</a>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default CheckEmail;
