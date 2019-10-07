import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as ClientesIcon } from "../../assets/ico/ic_clientes.svg";
import { ReactComponent as TotaisIcon } from "../../assets/ico/ic_totais.svg";
import { NavLink } from "react-router-dom";

const NavItem = ({ icon, label, path }) => {
  return (
    <div className="row">
      <div className="col">
        <NavLink to={path}>
          <div className={styles.navItem}>
            {
              {
                totais: <TotaisIcon />,
                clientes: <ClientesIcon />
              }[icon]
            }
            <span className={styles.navItemText}>{label}</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavItem;
