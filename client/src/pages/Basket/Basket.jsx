import React from "react";

import styles from "./basket.module.scss";
// import { ReactComponent as Empty } from "../../assets/icons/empty.svg";
import BasketCard from "../../components/BasketCard/BasketCard";
import BasketCalc from "../../components/BasketCalc/BasketCalc";

const Basket = () => {
  return (
    <div className={styles.basketPage}>
      <div className="container">
        <h3>Səbət (0 məhsul)</h3>
        <div className={styles.basket}>
          <div className={styles.basketCards}>
            <BasketCard></BasketCard>
            <BasketCard></BasketCard>
          </div>
          <BasketCalc></BasketCalc>
        </div>
        {/* Empty basket */}
        {/* <div className={styles.emptyBasket}>
          <Empty />
          <p>Səbətiniz halhazırda boşdur</p>
          <button>Alış-verişə davam et</button>
        </div> */}
      </div>
    </div>
  );
};

export default Basket;
