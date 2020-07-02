import { useRef, useEffect } from "react";

function usePopupHandler(triggerRef, targetRef, callback, popup) {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!popup) {
        if (triggerRef?.current?.contains(e.target) && callback) {
          callbackRef.current();
        }
      } else if (!targetRef?.current?.contains(e.target)) {
        if (popup) {
          callbackRef.current();
        }
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [callbackRef, targetRef, triggerRef, callback, popup]);
}

export default usePopupHandler;
