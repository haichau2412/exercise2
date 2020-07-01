import React from "react";
import styles from "../../assets/css/Profile.module.css";
import Item from "./Item";

const Panel = ({ profile, selectItem, selectedProfile }) => {
  return (
    <div className={`scrollable ${styles.profileList}`}>
      {profile.map(({ name, id, configurable }, index) => {
        return (
          <Item
            key={id}
            active={selectedProfile.id === id}
            name={name}
            configurable={configurable}
            selectItem={() => selectItem(index, id)}
          />
        );
      })}
      <input
        className={styles["profile-item"]}
        placeholder='Enter Profile Name'
        maxLength='25'
      />
    </div>
  );
};

export default Panel;
