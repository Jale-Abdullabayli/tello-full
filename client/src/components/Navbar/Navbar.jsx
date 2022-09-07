import React, { useState } from "react";
import styles from "./navbar.module.scss";

import SubCategories from "../SubCategories/SubCategories";

const Navbar = ({ hamMenu }) => {
  const [selectedNav, setselectedNav] = useState("");
  return (
    <div className={styles.navbar} onMouseLeave={() => setselectedNav("")}>
      <div className="container">
        <div className={styles.navigations}>
          <div className="navigator" onMouseEnter={() => setselectedNav("")}>
            Yeni
          </div>
          <div
            className="navigator"
            onMouseEnter={() => setselectedNav("apple")}
            onClick={() => setselectedNav("apple")}
          >
            Apple
          </div>
          <div
            className="navigator"
            onMouseEnter={() => setselectedNav("samsung")}
            onClick={() => setselectedNav("samsung")}
          >
            Samsung
          </div>
          <div
            className="navigator"
            onMouseEnter={() => setselectedNav("xiaomi")}
            onClick={() => setselectedNav("xiaomi")}
          >
            Xiaomi
          </div>
          <div
            className="navigator"
            onMouseEnter={() => setselectedNav("redmi")}
          >
            Redmi
          </div>
          <div className="navigator" onMouseEnter={() => setselectedNav("")}>
            Bütün məhsullar
          </div>
          <div className="navigator" onMouseEnter={() => setselectedNav("")}>
            Aksesuarlar
          </div>
        </div>
      </div>

      {selectedNav != "" && <SubCategories></SubCategories>}
    </div>
  );
};

export default Navbar;
