import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as ClientesIcon } from "../../assets/ico/ic_clientes.svg";
import { ReactComponent as TotaisIcon } from "../../assets/ico/ic_totais.svg";
import { NavLink } from "react-router-dom";

const NavItem = ({ icon, label, path, selected }) => {
  console.log(selected);
  return (
    <div className="row">
      <div className="col">
        <NavLink to={path}>
          <div
            className={
              selected ? styles.selectedNavItem : styles.unselectedNavItem
            }
          >
            {
              {
                totais: <TotaisIcon />,
                clientes: <ClientesIcon />
              }[icon]
            }
            <span> {label}</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavItem;
