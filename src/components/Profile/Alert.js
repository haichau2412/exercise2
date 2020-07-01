import React from "react";
import styles from "../../assets/css/Profile.module.css";
import { useAlteration } from "./AlterationProvider";
import { useDispatch } from "react-redux";

const Alert = () => {
  const { popup } = useAlteration();
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles["profile-del"]} ${styles.alert}  flex 
      ${popup ? styles.show : ""}
      `}
    >
      <div className='title'>delete eq</div>
      <div className='body-text t-center'>delete eq</div>
      <div className='thx-btn' onClick={() => dispatch({ type: "DELETE" })}>
        delete
      </div>
    </div>
  );
};

export default Alert;
