import React from "react";

import styles from "./subCategories.module.scss";

const SubCategories = () => {
  return (
    <div className={styles.subCategories}>
      <div className="container">
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
      </div>
    </div>
  );
};

export default SubCategories;
