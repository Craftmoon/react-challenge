import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as DashboardIcon } from "../../assets/ico/ic_dashboard.svg";
import { ReactComponent as LogoIcon } from "../../assets/ico/ic_logo.svg";
import { ReactComponent as CadastroIcon } from "../../assets/ico/ic_cadastro.svg";
import Text from "../text";

const MenuItem = ({ icon, label }) => {
  return (
    <div
      //  Substituir essa condição aqui em baixo por uma condição de state depois
      className={`${styles.menuItem} ${
        icon === "dashboard" ? styles.selected : styles.notSelected
      }`}
    >
      {
        {
          logo: <LogoIcon className={styles.alignSelfCenter} />,
          dashboard: <DashboardIcon className={styles.alignSelfCenter} />,
          cadastro: <CadastroIcon className={styles.alignSelfCenter} />
        }[icon]
      }
      <Text font="avenir medium">{label}</Text>
    </div>
  );
};

export default MenuItem;
