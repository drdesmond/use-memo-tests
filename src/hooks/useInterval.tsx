import { useEffect, useRef } from "react";


export const useInterval = (callback: () => void, delay: number | null) => {
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (delay !== null) {
      intervalRef.current = setInterval(callback, delay);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [callback, delay]);

  const clear = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return { intervalRef, clear };
};