import React, { useState } from "react";

import styles from "./products.module.scss";

import ProductCard from "../ProductCard/ProductCard";

const Products = ({products}) => {
  const [showSorting, setShowSorting] = useState(false);
  const [showFiltering, setShowFiltering] = useState(false);
  return (
    <>
      <div className={styles.productsSettings}>
        <div
          className={styles.settingBox}
          onClick={() => setShowSorting(!showSorting)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.00038 6.99998L8.00038 20C8.00038 20.552 7.55338 21 7.00038 21C6.44738 21 6.00038 20.552 6.00038 20L6.00038 6.91798L4.79038 8.47598C4.45138 8.91198 3.82238 8.99098 3.38738 8.65198C2.95038 8.31298 2.87138 7.68398 3.21038 7.24898L6.21038 3.38698C6.40138 3.13998 6.69638 2.99798 7.00938 2.99998C7.32038 3.00198 7.61338 3.14998 7.80038 3.39998L10.8004 7.39998C10.9354 7.57998 11.0004 7.79098 11.0004 7.99898C11.0004 8.30298 10.8624 8.60398 10.6004 8.79998C10.1584 9.13098 9.53138 9.04198 9.20038 8.59998L8.00038 6.99998ZM15.0004 17L15.0004 3.99998C15.0004 3.44798 15.4474 2.99998 16.0004 2.99998C16.5534 2.99998 17.0004 3.44798 17.0004 3.99998L17.0004 17.082L18.2104 15.524C18.5494 15.088 19.1784 15.009 19.6134 15.348C19.8674 15.545 20.0004 15.84 20.0004 16.138C20.0004 16.353 19.9324 16.569 19.7904 16.751L16.7904 20.613C16.5994 20.86 16.3044 21.002 15.9914 21C15.6804 20.998 15.3874 20.85 15.2004 20.6L12.2004 16.6C11.8694 16.157 11.9584 15.531 12.4004 15.2C12.8424 14.869 13.4694 14.958 13.8004 15.4L15.0004 17Z"
              fill="#303030"
            />
          </svg>
          Sıralama
        </div>
        <span className={styles.lineY}></span>
        <div
          className={styles.settingBox}
          onClick={() => setShowFiltering(!showFiltering)}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.67006 1.02562H18.4087C18.5941 1.09065 18.7622 1.19727 18.9001 1.3373C19.0379 1.47733 19.1419 1.64705 19.2041 1.83348C19.2662 2.0199 19.2848 2.21808 19.2586 2.41282C19.2323 2.60756 19.1618 2.79371 19.0525 2.957L12.6145 10.0387V19.0518L7.46419 15.1891V10.0387L1.02626 2.957C0.916936 2.79371 0.846434 2.60756 0.820157 2.41282C0.793881 2.21808 0.812527 2.0199 0.874668 1.83348C0.93681 1.64705 1.0408 1.47733 1.17866 1.3373C1.31653 1.19727 1.48462 1.09065 1.67006 1.02562Z"
              stroke="#303030"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Filterləmələr
        </div>
      </div>
      <div className={styles.productsTop}>
        <p className={styles.productsCount}>287 məhsul tapıldı</p>
        <select
          className={`${styles.mySelectMenu}  ${showSorting && styles.active}`}
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div className={styles.products}>
        {
          products.map(product=> <ProductCard product={product}></ProductCard>)
        }
      </div>
      <div className={styles.productsPagenation}>
        <span className={styles.stepPage}>
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
              d="M5.36204 10C5.10004 10 4.83904 9.89801 4.64304 9.69501L0.78004 5.69501C0.40204 5.30201 0.40704 4.67901 0.79304 4.29301L4.79304 0.293006C5.18304 -0.0979941 5.81604 -0.0979941 6.20704 0.293006C6.59704 0.684006 6.59704 1.31601 6.20704 1.70701L2.90204 5.01201L6.08104 8.30501C6.46504 8.70301 6.45404 9.33601 6.05704 9.71901C5.86204 9.90701 5.61204 10 5.36204 10Z"
              fill="#4F4F4F"
            />
          </svg>
        </span>
        <span className={styles.page}>1</span>
        <span className={`${styles.page} ${styles.active}`}>2</span>
        <span className={styles.page}>3</span>
        <span className={styles.page}>4</span>
        <span className={styles.page}>5</span>
        <span className={styles.page}>6</span>

        <span className={styles.stepPage}>
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
              d="M1.63796 10C1.89996 10 2.16096 9.89801 2.35696 9.69501L6.21996 5.69501C6.59796 5.30201 6.59296 4.67901 6.20696 4.29301L2.20696 0.293006C1.81696 -0.0979941 1.18396 -0.0979941 0.79296 0.293006C0.40296 0.684006 0.40296 1.31601 0.79296 1.70701L4.09796 5.01201L0.91896 8.30501C0.53496 8.70301 0.54596 9.33601 0.94296 9.71901C1.13796 9.90701 1.38796 10 1.63796 10Z"
              fill="#4F4F4F"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default Products;
