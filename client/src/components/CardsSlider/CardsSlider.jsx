import React from "react";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./cardsSlider.module.scss";

const CardsSlider = ({products}) => {
  return (
    <div className="container">
      <div className={styles.sliderInfo}>
        <h3>Ən çox satılan məhsullar</h3>
        <p>
          Hamısına bax
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.49976 10C1.24376 10 0.987762 9.902 0.792762 9.707C0.401762 9.316 0.401762 8.684 0.792762 8.293L4.09776 4.988L0.917762 1.695C0.534762 1.297 0.545762 0.664005 0.942762 0.281005C1.34076 -0.101995 1.97376 -0.0909952 2.35676 0.305005L6.21876 4.305C6.59776 4.698 6.59276 5.321 6.20676 5.70701L2.20676 9.707C2.01176 9.902 1.75576 10 1.49976 10Z"
              fill="#333333"
            />
          </svg>
        </p>
      </div>
      <div className={styles.cardsSlider}>
        {products?.map(product=><ProductCard key={product._id} product={product}/>)}
      </div>
    </div>
  );
};

export default CardsSlider;