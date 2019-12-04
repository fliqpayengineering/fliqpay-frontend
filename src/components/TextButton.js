import React from "react";

const variants = {
  primary: "text-purple-800 hover:bg-purple-100 disabled:text-purple-300",
  secondary: "text-blue-800 hover:bg-blue-100 disabled:text-blue-300",
  info: "text-gray-600 hover:bg-gray-100 disabled:text-gray-300",
  danger: "text-red-600 hover:bg-red-100 disabled:text-red-300",
  warning: "text-yellow-600 hover:bg-yellow-100 disabled:text-orange-300",
  success: "text-green-600 hover:bg-green-100 disabled:text-green-300",
  black: "text-gray-900 hover:bg-gray-100 disabled:text-gray-300"
};

export default function TextButton({
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
      className={`uppercase ${variants[type]} outline-none focus:outline-none py-4 px-5 rounded inline-flex items-center justify-center text-sm font-medium ${className} w-${width} disabled:bg-transparent`}
      title={tooltip}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
