import React from "react";
import CheckBox from "../components/Form/CheckBox";
import Button from "../components/Button";

export default function Index() {
  return (
    <div>
      <h1>Fliqpay</h1>
      <CheckBox checked={true} onChange={null} title="Keep me signed in" />
      <Button type="warning" text="Button" disabled={true} />
    </div>
  );
}
