import React from "react";
import styles from "./styles.module.scss";

const FilterButton = ({ text, onClick }) => {
  return (
    <button className={styles.filterOff} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default FilterButton;
