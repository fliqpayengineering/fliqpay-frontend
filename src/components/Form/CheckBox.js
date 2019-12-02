import React from "react";
import "./CheckBox.scss";

export default function CheckBox({
  name,
  checked,
  title,
  onChange,
  className,
  required
}) {
  return (
    <div
      className={`CheckBox flex flex-col text-primarydark text-sm ${className}`}
    >
      <label className="text-gray-500">
        <input
          name={name}
          className="mr-2 leading-tight"
          onChange={onChange}
          type="checkbox"
          checked={checked}
          required={required}
        />
        <span className="text-sm text-gray-800">{title}</span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
