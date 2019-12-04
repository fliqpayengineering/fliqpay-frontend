import React from "react";

const helperClasses = {
  info: "text-gray-500",
  warning: "text-yellow-500",
  danger: "text-red-600",
  success: "text-green-600",
  disabled: "text-gray-200"
};

const helperTypes = Array.from(Object.keys(helperClasses));

export default function Input({
  title,
  name,
  placeholder,
  type,
  wrapperClass,
  labelClass,
  inputClass,
  helper,
  prefix,
  suffix,
  value,
  onChange
}) {
  const borderStyle =
    helper && helper.type ? { borderColor: "currentColor" } : {};
  return (
    <div
      className={`form-group flex flex-col text-sm ${wrapperClass} ${
        helper && helper.type ? helperClasses[helper.type] : "text-primarydark"
      }`}
    >
      {title && (
        <label htmlFor={name} className={`mb-1 ${labelClass}`}>
          {title}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`appearance-none border rounded px-3 py-3 outline-none w-full focus:border-primarydark focus:bg-white focus:border-dashed ${inputClass} ${
          value ? "border-primarydark" : ""
        }`}
        style={borderStyle}
      />
      {helper && helper.message && (
        <p className={`${helperClasses[helper.type]} text-xs my-1 mx-3`}>
          {helper.message}
        </p>
      )}
    </div>
  );
}
