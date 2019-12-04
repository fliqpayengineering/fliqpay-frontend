import React from "react";
import "./CheckBox.scss";

export default function CheckBox({
  name,
  type,
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
      <label className="text-primarydark">
        <input
          name={name}
          className="mr-2 leading-tight"
          onChange={onChange}
          type="checkbox"
          checked={checked}
          required={required}
        />
        <span className="text-sm text-gray-800">{title}</span>
        <span className="checkmark bg-current"></span>
      </label>
    </div>
  );
}
