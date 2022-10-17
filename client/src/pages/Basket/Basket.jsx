import React, { useEffect, useState } from "react";

import styles from "./basket.module.scss";
import { ReactComponent as Empty } from "../../assets/icons/empty.svg";
import BasketCard from "../../components/BasketCard/BasketCard";
import BasketCalc from "../../components/BasketCalc/BasketCalc";
import { useLocation } from "react-router-dom";

const Basket = () => {

  const [basket, setBasket] = useState(useLocation().state);


  if (!basket || basket?.products?.length === 0) {
    return <div className={styles.emptyBasket}>
      <Empty />
      <p>Səbətiniz halhazırda boşdur</p>
      <button>Alış-verişə davam et</button>
    </div>
  }
  return (
    <div className={styles.basketPage}>
      <div className="container">
        <h3>Səbət (0 məhsul)</h3>

        <div className={styles.basket}>
          <div className={styles.basketCards}>
            {basket?.products?.map(basketProduct => <BasketCard setBasket={setBasket} key={basketProduct._id}  basketProduct={basketProduct}></BasketCard>)}
          </div>
          <BasketCalc totalPrice={basket?.totalPrice}></BasketCalc>
        </div>

      </div>
    </div>
  );
};

export default Basket;
