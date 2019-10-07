import React from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "../menu-item";

const Menu = () => {
  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className={styles.menuContainer}>
      <MenuItem icon="logo" />
      <MenuItem icon="dashboard" label="Meu faturamento" />
      <MenuItem icon="cadastro" label="Cadastro" />
    </div>
  );
};

export default Menu;
