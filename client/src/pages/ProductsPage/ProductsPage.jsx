import React, { useEffect } from "react";

import styles from "./productsPage.module.scss";

import FilterSection from "../../components/FilterSection/FilterSection";
import Products from "../../components/Products/Products";


const ProductsPage = () => {


  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <>
      <div className="container">
        <div className={styles.productsPage}>
          <div className={styles.productsFilter}>
            <FilterSection></FilterSection>
            <FilterSection></FilterSection>
            <FilterSection></FilterSection>
          </div>
          <div className={styles.products}>
            <Products></Products>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
