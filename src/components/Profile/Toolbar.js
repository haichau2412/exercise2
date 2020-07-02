import React from "react";
import styles from "../../assets/css/Profile.module.css";
import { useAlteration } from "./AlterationProvider";

const Toolbar = ({ configurable, add, moveUp, moveDown, index, length }) => {
  const { toggleFocus, triggerRef } = useAlteration();

  return (
    <div className={`${styles.toolbar} flex`}>
      <div className={`${styles.icon} ${styles.add}`} onClick={add}></div>
      <div
        className={`${styles.icon} ${styles.edit} ${
          configurable ? styles.show : ""
        }`}
        onClick={toggleFocus}
      ></div>
      <div
        ref={triggerRef}
        className={`${styles.icon} ${styles.delete} ${
          configurable ? styles.show : ""
        } `}
      ></div>

      <div
        className={`${styles.icon} ${styles.down} ${
          index === length - 1 ? styles.disabled : ""
        }`}
        onClick={moveDown}
      ></div>
      <div
        className={`${styles.icon} ${styles.up} ${
          index === 0 ? styles.disabled : ""
        }`}
        onClick={moveUp}
      ></div>
    </div>
  );
};

export default Toolbar;
