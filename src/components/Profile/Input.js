import React from "react";
import styles from "../../assets/css/Profile.module.css";

const Input = () => {
  return (
    <input
      className={styles["profile-item"]}
      placeholder='Enter Profile Name'
      maxLength='25'
    />
  );
};

export default Input;
