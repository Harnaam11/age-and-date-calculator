import React from "react";

// A simple Card wrapper component
export const Card = ({ children, className, style }) => (
  <div className={className} style={{ padding: "20px", borderRadius: "8px", backgroundColor: "#f0f0f0", ...style }}>
    {children}
  </div>
);

export const CardContent = ({ children, className, style }) => (
  <div className={className} style={{ ...style }}>
    {children}
  </div>
);
