import React from "react";
import styles from "./styles.module.scss";
import NumberFormat from "react-number-format";

const ValueBillboard = ({ value, label, valuePrefix }) => {
  return (
    <section className={styles.billboardContainer}>
      <div className="row ">
        <div className={`col ${styles.billboardLabel}`}>{label}</div>
      </div>
      <div className="row ">
        <div className="col">
          <div className={styles.valuesWrapper}>
            <div className={styles.billboardValuePrefix}>{valuePrefix}</div>
            <div className={styles.billboardValue}>
              <NumberFormat
                thousandSeparator="."
                displayType={"text"}
                decimalSeparator=","
                value={value}
                decimalScale={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueBillboard;
