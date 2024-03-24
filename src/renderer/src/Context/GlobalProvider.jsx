import React, { createContext, useContext } from 'react';
import useGlobal from '../Hooks/useGlobal';

const global = createContext();

export function GlobalProvider({ children }) {
  return (
    <global.Provider value={useGlobal()}>
      {children}
    </global.Provider>
  );
}

export const useAuth = () => useContext(global);