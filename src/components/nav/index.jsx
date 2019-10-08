import React, { useState } from "react";
import styles from "./styles.module.scss";
import NavItem from "../nav-item";

const Nav = () => {
  const navItems = [
    { key: 0, icon: "totais", label: "TOTAIS", path: "/transactions" },
    { key: 1, icon: "clientes", label: "CLIENTES", path: "/customers" }
  ];

  const [selected, setSelected] = useState("TOTAIS");

  return (
    <div className={styles.nav}>
      {navItems.map(item => (
        <NavItem
          key={item.key}
          label={item.label}
          icon={item.icon}
          path={item.path}
          onClick={() => {
            setSelected(item.label);
          }}
          selected={selected === item.label ? true : false}
        />
      ))}
    </div>
  );
};

export default Nav;
