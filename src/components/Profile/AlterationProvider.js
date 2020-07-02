import React, { createContext, useContext, useState, useRef } from "react";
import { useSelector } from "react-redux";
import usePopupHandler from "./usePopupHandler";

const AlterationContext = createContext();

const mapStateToProps = (state) =>
  state.profile[state.selectedProfile.index].name;

export const AlterationContextProvider = ({ children }) => {
  const targetRef = useRef();
  const triggerRef = useRef();

  const name = useSelector(mapStateToProps);

  const [focus, setFocus] = useState(false);
  const [popup, setPopup] = useState(false);

  const toggleFocus = () => {
    setFocus((pre) => !pre);
  };

  const hideFocus = () => {
    setFocus(false);
  };

  const togglePopup = () => {
    setPopup((pre) => !pre);
  };

  usePopupHandler(triggerRef, targetRef, togglePopup, popup);

  return (
    <AlterationContext.Provider
      value={{
        targetRef,
        triggerRef,
        togglePopup,
        toggleFocus,
        hideFocus,
        focus,
        popup,
        name,
      }}
    >
      {children}
    </AlterationContext.Provider>
  );
};

export const useAlteration = () => useContext(AlterationContext);
