import React, { useState } from "react";
import styles from "./styles.module.scss";
import MenuItem from "../menu-item";
import { ReactComponent as MenuIcon } from "../../assets/ico/ic_menu.svg";

const Menu = () => {
  return (
    <React.Fragment>
      <div className={styles.menuContainer}>
        <MenuItem icon="logo" />
        <MenuItem icon="dashboard" label="Meu faturamento" />
        <MenuItem icon="cadastro" label="Cadastro" />
      </div>
      <div className={styles.menuOpener}>
        <MenuIcon className={styles.smallMenu} />
      </div>
    </React.Fragment>
  );
};

export default Menu;
