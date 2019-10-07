import React from "react";
import styles from "./styles.module.scss";

const Text = ({ font, children, fontSize, color, textClass }) => {
  // return (K
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
