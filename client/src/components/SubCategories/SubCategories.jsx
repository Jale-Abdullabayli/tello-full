import React, { useEffect } from "react";

import styles from "./subCategories.module.scss";
import SubCategoryName from './SubCategoryName';

const SubCategories = ({ categoryChildren }) => {




  return (
    <div className={styles.subCategories}>
      <div className="container">
        {
          categoryChildren.map(el => <SubCategoryName key={el._id} category={el}></SubCategoryName>)
        }

        {/* <div className={styles.cat}>
          <h5>Başlıq</h5>
          <ul>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
          </ul>
        </div>
        <div className={styles.cat}>
          <h5>Başlıq</h5>
          <ul>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
          </ul>
        </div>
        <div className={styles.cat}>
          <h5>Başlıq</h5>
          <ul>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
            <li>Alt başlıq</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default SubCategories;
