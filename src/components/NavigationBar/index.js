import React from "react";
import "./NavigationBar.scss";

export default function NavigationBar() {
  return (
    <nav className="p-6 flex h-sm bg-transparent fixed top-0">
      <div className="">
        <img src={"/images/logo-primary.svg"} className="h-8" />
      </div>
    </nav>
  );
}
