import React from "react";
import styles from "../assets/css/Profile.module.css";
import Panel from "../components/Profile/Panel";
import Toolbar from "../components/Profile/Toolbar";
import Alert from "../components/Profile/Alert";

const ProfileDashboard = () => {
  return (
    <div className={`${styles["thx-drawer"]} flex`}>
      <div className='main-title'>Profile List</div>
      <Panel />
      <Toolbar />
      <Alert />
    </div>
  );
};

export default ProfileDashboard;
