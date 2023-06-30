import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
      console.log(debounceValue);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);
  return debounceValue;
};

export default useDebounce;
