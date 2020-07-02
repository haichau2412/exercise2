import React, { useRef, useEffect } from "react";
import styles from "../../assets/css/Profile.module.css";
import { useSelector } from "react-redux";
import Item from "./Item";

const mapStateToProps = (state) => ({
  length: state.profile.length,
});

const Panel = ({ profile, selectItem, selectedProfile }) => {
  const { length: profileLength } = useSelector(mapStateToProps);
  const panelRef = useRef();

  useEffect(() => {
    if (
      typeof panelRef.current.length === "undefined" ||
      panelRef.current.length < profileLength
    ) {
      panelRef.current.length = profileLength;
      panelRef.current.scrollTo(0, panelRef.current.scrollHeight);
    }
  }, [profileLength]);

  useEffect(() => {
    panelRef.current.scrollTo(0, 0);
  }, [panelRef]);

  return (
    <div ref={panelRef} className={`scrollable ${styles.profileList}`}>
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
    </div>
  );
};

export default Panel;
