import React from "react";
import styles from "../../assets/css/Profile.module.css";

const Toolbar = ({ configurable, add, moveUp, moveDown }) => {
  return (
    <div className={`${styles.toolbar} flex`}>
      <div className={`${styles.icon} ${styles.add}`} onClick={add}></div>
      <div
        className={`${styles.icon} ${styles.edit} ${
          configurable ? styles.show : ""
        }`}
      ></div>
      <div
        className={`${styles.icon} ${styles.delete} ${
          configurable ? styles.show : ""
        } `}
      ></div>

      <div className={`${styles.icon} ${styles.down}`} onClick={moveDown}></div>
      <div className={`${styles.icon} ${styles.up}`} onClick={moveUp}></div>
    </div>
  );
};

export default Toolbar;
