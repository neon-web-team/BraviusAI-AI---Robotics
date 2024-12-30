import { useEffect, useRef } from "react";


const useOutsideClick = (handler,active) => {
    const ref = useRef();
  
    useEffect(() => {
      function handleClick(e) {
        if(!active)return;
        if (ref.current && !ref.current.contains(e.target)) handler?.();
      }
      document.addEventListener("click", handleClick, true);
      return ()=> document.removeEventListener("click", handleClick, true);
    }, [handler,active]);

    return ref
}
export default useOutsideClick