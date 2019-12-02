import React from "react";

export default function Button({
  type,
  text,
  icon,
  tooltip,
  className,
  width = auto,
  disabled,
  onClick
}) {
  return (
    <button
      className={`uppercase bg-secondary hover:bg-blue-900 text-gray-100 outline-none py-4 px-5 rounded inline-flex items-center justify-center text-sm font-medium ${className} w-${width}`}
      title={tooltip}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
