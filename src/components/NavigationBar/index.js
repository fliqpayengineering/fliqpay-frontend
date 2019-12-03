import React from "react";
import "./NavigationBar.scss";

export default function NavigationBar() {
  return (
    <nav className="flex items-center w-full p-6 h-20 bg-white sticky top-0 z-10">
      <div className="">
        <img src={"/images/logo-primary.svg"} className="h-8" />
      </div>
    </nav>
  );
}
