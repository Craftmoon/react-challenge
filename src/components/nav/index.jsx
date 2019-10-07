import React from "react";
import styles from "./styles.module.scss";
import NavItem from "../nav-item";
import { BrowserRouter } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { icon: "totais", label: "TOTAIS", path: "/transactions" },
    { icon: "clientes", label: "CLIENTES", path: "/customers" }
  ];

  return (
    <div className={styles.nav}>
      {navItems.map(item => (
        <NavItem label={item.label} icon={item.icon} path={item.path} />
      ))}
    </div>
  );
};

export default Nav;
