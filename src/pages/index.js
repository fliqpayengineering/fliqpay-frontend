import React from "react";
import CheckBox from "../components/Form/CheckBox";

export default function Index() {
  return (
    <div>
      <h1>Fliqpay</h1>
      <CheckBox checked={true} onChange={null} title="Keep me signed in" />
    </div>
  );
}
