import { useEffect } from "react";

const useGlobal = () => {

  useEffect(() => {
   console.log('use global');
  }, []);

  return {
  };
};

export default useGlobal;