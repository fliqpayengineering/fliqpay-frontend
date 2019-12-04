import React from "react";
import CheckBox from "../components/Form/CheckBox";
import Input from "../components/Form/Input";
import Button from "../components/Button";
import TextButton from "../components/TextButton";

import * as ROUTES from "../constants/routes";
import Link from "next/link";
import NavigationBar from "../components/NavigationBar";

export default function Index() {
  // Preview purposes

  let [a, setA] = React.useState(1);
  return (
    <div className="">
      <NavigationBar />
      <div className="flex flex-col p-6">
        <small className="my-4">Links</small>
        {Object.keys(ROUTES.AUTH).map(key => (
          <Link href={ROUTES.AUTH[key]}>{key}</Link>
        ))}
        {Object.keys(ROUTES.DASHBOARD).map(key => (
          <Link href={ROUTES.DASHBOARD[key]}>{key}</Link>
        ))}
      </div>
      <div className="p-6">
        <p>Preview</p>
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
    </div>
  );
}
