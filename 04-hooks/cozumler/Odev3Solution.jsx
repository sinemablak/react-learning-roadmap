import { useEffect, useRef } from "react";

function AutoFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

export default AutoFocus;
