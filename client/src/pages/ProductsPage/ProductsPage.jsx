import React, { useEffect } from "react";

import styles from "./productsPage.module.scss";

import FilterSection from "../../components/FilterSection/FilterSection";
import Products from "../../components/Products/Products";
import { useSelector,useDispatch } from "react-redux";
import {fetchProductsAsync} from '../../redux/actions/productAction';


const ProductsPage = () => {

  const products=useSelector(state=>state.productReducer.products)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0,0);
    dispatch(fetchProductsAsync());
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
            <Products products={products}></Products>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
