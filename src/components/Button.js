import React from "react";

const variants = {
  primary: "bg-purple-800 hover:bg-purple-900 disabled:bg-purple-300",
  secondary: "bg-blue-800 hover:bg-blue-900 disabled:bg-blue-300",
  info: "bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300",
  danger: "bg-red-600 hover:bg-red-800 disabled:bg-red-300",
  warning: "bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300",
  success: "bg-green-600 hover:bg-green-800 disabled:bg-green-300",
  black: "bg-gray-900 hover:bg-black disabled:bg-gray-300"
};

export default function Button({
  type,
  text,
  icon,
  tooltip,
  className,
  width,
  disabled,
  onClick
}) {
  return (
    <button
      className={`uppercase ${
        variants[type]
      } text-gray-100 outline-none focus:outline-none py-4 px-5 rounded inline-flex items-center justify-center text-sm font-medium ${className} w-${width} ${
        disabled ? "bg-blue-100" : ""
      }`}
      title={tooltip}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
