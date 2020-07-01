import React from "react";
import styles from "../../assets/css/Profile.module.css";
import Input from "./Input";

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
      {active ? <Input /> : null}
    </div>
  );
};

export default Item;
