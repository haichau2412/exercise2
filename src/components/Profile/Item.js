import React from "react";
import styles from "../../assets/css/Profile.module.css";

const Item = ({ configurable, name, active, selectItem }) => {
  return (
    <div
      className={`
      ${styles["profile-item"]} 
      ${configurable ? styles.custom : styles[name]} 
      ${active ? styles.active : ""} 
      `}
      onClick={selectItem}
    >
      {name}
    </div>
  );
};

export default Item;
