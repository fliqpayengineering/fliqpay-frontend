import React from "react";

const helperClasses = {
  info: "text-gray-500",
  warning: "text-yellow-500",
  danger: "text-red-600",
  success: "text-teal-600",
  disabled: "text-gray-300"
};

export default function Select({
  title,
  name,
  options,
  value,
  placeholder,
  wrapperClass,
  labelClass,
  selectClass,
  helperMessage,
  helperType,
  prefix,
  suffix,
  handleChange,
  required
}) {
  return (
    <div
      className={`form-group flex flex-col text-primarydark text-sm ${wrapperClass}`}
    >
      {title && (
        <label htmlFor={name} className={`mb-1 ${labelClass}`}>
          {title}
        </label>
      )}
      <select
        className={`appearance-none border rounded px-3 py-3 outline-none bg-gray-s100 w-full focus:border-primarydark focus:bg-white ${selectClass} ${!value &&
          "text-gray-500"}`}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options &&
          options.map(option => {
            return (
              <option key={option} value={option} label={option}>
                {option}
              </option>
            );
          })}
      </select>
      {helperMessage && (
        <p className={`${helperClasses[helperType]} text-xs m-1`}>
          {helperMessage}
        </p>
      )}
    </div>
  );
}
