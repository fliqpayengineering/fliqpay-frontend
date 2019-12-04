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
  required,
  disabled
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
      <div className="relative inline-flex justify-start items-center">
        {prefix && (
          <span className="absolute flex items-center justify-center px-3 whitespace-no-wrap text-gray-500 text-sm w-12 h-12">
            {prefix}
          </span>
        )}
        <select
          id={name}
          className={`appearance-none border rounded px-3 py-3 outline-none w-full focus:border-primarydark bg-white ${selectClass} ${
            !value ? "text-gray-500" : "text-primarydark border-primarydark"
          } ${prefix && "pl-12"}`}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          disabled={disabled}
        >
          <option value="" label={placeholder} disabled>
            {placeholder}
          </option>
          {options.length > 0 &&
            options.map(option => {
              const value = option.value ? option.value : option;
              const label = option.label ? option.label : option;
              return (
                <option key={value} value={value} label={label}>
                  {label}
                </option>
              );
            })}
        </select>
      </div>
      {helperMessage && (
        <p className={`${helperClasses[helperType]} text-xs m-1`}>
          {helperMessage}
        </p>
      )}
    </div>
  );
}
