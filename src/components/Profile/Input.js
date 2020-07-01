import React, { useRef, useEffect } from 'react';
import styles from '../../assets/css/Profile.module.css';
import { useAlteration } from './AlterationProvider';
import { useDispatch } from 'react-redux';

const Input = () => {
  const inputRef = useRef();
  const { focus } = useAlteration();
  const dispatch = useDispatch();

  useEffect(() => {
    if (focus) inputRef.current.focus();
  }, [inputRef, focus]);

  useEffect(() => {
    inputRef.current.addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
      } else if (event.keyCode === 27) {
      } else {
      }
    });
  }, [inputRef, dispatch]);

  return (
    <input
      style={{ display: focus ? 'block' : 'none' }}
      ref={inputRef}
      className={styles['profile-item']}
      placeholder="Enter Profile Name"
      maxLength="25"
    />
  );
};

export default Input;
