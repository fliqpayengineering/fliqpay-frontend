import React from "react";
import CheckBox from "../components/Form/CheckBox";
import Input from "../components/Form/Input";
import Button from "../components/Button";
import TextButton from "../components/TextButton";

import * as ROUTES from "../constants/routes";
import Link from "next/link";

export default function Index() {
  let [a, setA] = React.useState(1);
  return (
    <div>
      <h1>Fliqpay</h1>
      <div className="flex flex-col">
        <h1>Links</h1>
        {Object.keys(ROUTES.AUTH).map(key => (
          <Link href={ROUTES.AUTH[key]}>{key}</Link>
        ))}
        {Object.keys(ROUTES.DASHBOARD).map(key => (
          <Link href={ROUTES.DASHBOARD[key]}>{key}</Link>
        ))}
      </div>
      <CheckBox checked={true} onChange={null} title="Keep me signed in" />
      <Button type="info" text="Button" disabled={true} />
      <TextButton type="black" text="Button" disabled={false} />
      <Input
        title="Your name"
        placeholder="Enter your name"
        helper={null}
        value={a}
        onChange={e => setA(e.target.value)}
      />
    </div>
  );
}
