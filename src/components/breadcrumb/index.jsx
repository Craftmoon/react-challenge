import React from "react";
import Text from "../text";
import styles from "./styles.module.scss";

const Breadcrumb = () => {
  const breadcrumbArray = [
    { label: "PETSHOP", id: 0 },
    { label: "MEU FATURAMENTO", id: 1 }
  ];
  return (
    <div className={styles.breadcrumbTrail}>
      <Text font="avenir heavy" fontSize={13}>
        {breadcrumbArray.map((breadcrumb, i, array) => (
          <span key={breadcrumb.id}>
            <span className={styles.breadcrumb}>{breadcrumb.label}</span>
            {array.length - 1 !== i ? "|" : ""}
          </span>
        ))}
      </Text>
    </div>
  );
};

export default Breadcrumb;
