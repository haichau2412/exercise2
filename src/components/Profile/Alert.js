import React from "react";
import styles from "../../assets/css/Profile.module.css";

const Alert = () => {
  return (
    <div className={`${styles["profile-del"]} alert flex`}>
      <div className='title'>delete eq</div>
      <div className='body-text t-center' id='delName'>
        delete eq
      </div>
      <div className='thx-btn' id='cfmDelete'>
        delete
      </div>
    </div>
  );
};

export default Alert;
