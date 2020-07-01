import React, { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AlterationContext = createContext();

const mapStateToProps = (state) =>
  state.profile[state.selectedProfile.index].name;

export const AlterationContextProvider = ({ children }) => {
  const name = useSelector(mapStateToProps);

  const [focus, setFocus] = useState(false);
  const [popup, setPopup] = useState(false);

  const toggleFocus = () => {
    setFocus((pre) => !pre);
  };
  const togglePopup = () => {
    setPopup((pre) => !pre);
  };

  const dispatch = useDispatch();

  return (
    <AlterationContext.Provider
      value={{ toggleFocus, togglePopup, focus, popup, name }}
    >
      {children}
    </AlterationContext.Provider>
  );
};

export const useAlteration = () => useContext(AlterationContext);
