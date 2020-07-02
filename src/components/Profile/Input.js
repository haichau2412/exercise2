import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "../../assets/css/Profile.module.css";
import { useAlteration } from "./AlterationProvider";
import { useDispatch } from "react-redux";
import useClickOutside from "./useClickOutside";

const Input = () => {
  const inputRef = useRef();
  const { focus, name, toggleFocus, hideFocus } = useAlteration();
  const dispatch = useDispatch();
  const [value, setValue] = useState(name);

  useClickOutside(inputRef, hideFocus);

  useEffect(() => {
    if (focus) {
      setValue(name);
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [inputRef, focus, name]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleEsc = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        toggleFocus();
      }
    },
    [toggleFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEsc, false);

    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, [handleEsc]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "RENAME", payload: { name: value } });
      toggleFocus();
    }
  };

  return (
    <input
      style={{ display: focus ? "block" : "none" }}
      ref={inputRef}
      className={styles["profile-item"]}
      placeholder='Enter Profile Name'
      maxLength='25'
      value={value}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Input;
