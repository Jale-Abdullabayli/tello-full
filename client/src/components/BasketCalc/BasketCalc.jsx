import React from "react";

import styles from "./basketCalc.module.scss";

const BasketCalc = ({totalPrice}) => {
  return (
    <div className={styles.calcBox}>
      <h4>Ümumi</h4>
      <div className={styles.calcRow}>
        <p>Məbləğ</p>
        <p>{totalPrice} ₼</p>
      </div>
      <div className={styles.calcRow}>
        <p>Çatdırılma</p>
        <p>0.00 ₼</p>
      </div>
      <div className={styles.calcRow}>
        <p>Hədiyyə paketi</p>
        <p>0.00 ₼</p>
      </div>
      <div className={styles.calcRow}>
        <p>Promo kod</p>
        <p>0.00 ₼</p>
      </div>
      <span className={styles.lineX}></span>
      <div className={styles.totalCalc}>
        <p>Cəmi</p>
        <span>{totalPrice} ₼</span>
      </div>
    </div>
  );
};

export default BasketCalc;
