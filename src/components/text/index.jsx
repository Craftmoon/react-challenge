import React from "react";

const Text = ({ font, children, fontSize, color, textClass }) => {
  return (
    <div
      className={textClass}
      style={{ fontSize: fontSize || 12, color: color, fontFamily: font }}
    >
      {children}
    </div>
  );
};

export default Text;
