import React from "react";

export default function Grid({ children, className, columns, gap }) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap
      }}
    >
      {children}
    </div>
  );
}
