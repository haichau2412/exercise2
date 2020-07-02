import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../assets/css/Profile.module.css";
import { useAlteration } from "./AlterationProvider";

const mapStateToProps = (state) => ({
  index: state.selectedProfile.index,
  configurable: state.profile[state.selectedProfile.index].configurable,
  profileLength: state.profile.length,
});

const Toolbar = () => {
  const { index, configurable, profileLength } = useSelector(mapStateToProps);
  const { toggleFocus, triggerRef } = useAlteration();
  const dispatch = useDispatch();

  const actions = useMemo(() => {
    return {
      add: () => dispatch({ type: "ADD" }),
      moveUp: () => dispatch({ type: "MOVE_UP" }),
      moveDown: () => dispatch({ type: "MOVE_DOWN" }),
    };
  }, [dispatch]);

  return (
    <div className={`${styles.toolbar} flex`}>
      <div
        className={`${styles.icon} ${styles.add}`}
        onClick={actions.add}
      ></div>
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
          index === profileLength - 1 ? styles.disabled : ""
        }`}
        onClick={actions.moveDown}
      ></div>
      <div
        className={`${styles.icon} ${styles.up} ${
          index === 0 ? styles.disabled : ""
        }`}
        onClick={actions.moveUp}
      ></div>
    </div>
  );
};

export default Toolbar;
