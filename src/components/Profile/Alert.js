import React from "react";
import "../../assets/css/Profile.module.css";

const Alert = () => {
  return (
    <div class='profile-del alert flex'>
      <div class='title'>delete eq</div>
      <div class='body-text t-center' id='delName'>
        delete eq
      </div>
      <div class='thx-btn' id='cfmDelete'>
        delete
      </div>
    </div>
  );
};

export default Alert;
