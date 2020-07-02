import { useRef, useEffect } from "react";

function useClickOutside(elRef, callback) {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!elRef?.current?.contains(e.target) && callback) {
        callbackRef.current();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [callbackRef, elRef, callback]);
}

export default useClickOutside;
