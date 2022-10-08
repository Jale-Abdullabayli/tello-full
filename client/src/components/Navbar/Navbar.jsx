import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import axios from '../../api/index';
import { NavLink } from 'react-router-dom'



import SubCategories from "../SubCategories/SubCategories";



const Navbar = ({ hamMenu }) => {
  const [categories, setCategories] = useState([]);
  const [selectedNav, setselectedNav] = useState("");


  const getCategories = async () => {
    const response = await axios.get('/categories');
    setCategories(response.data.data.categories.filter(category => category?.parentId?.length === 0));
  };

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <div className={styles.navbar} onMouseLeave={() => setselectedNav("")}>
      <div className="container">
        <div className={styles.navigations}>
          {categories.map((category, index) => {
            return  <NavLink className={({ isActive }) => (isActive ? styles.active : 'inactive')}
            key={index} to={`/products/${category.slug}/1`}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</NavLink>
           
          })}

          {/* //  <div className="navigator"
            //   onMouseEnter={() => setselectedNav("")}
            //   onClick={() => setselectedNav("apple")}>
            //   {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            // </div> */}

        </div>
      </div>

      {selectedNav != "" && <SubCategories></SubCategories>}
    </div>
  );
};

export default Navbar;
