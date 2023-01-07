import React, { useState, createContext } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  const [page, setPage] = useState("home");

  const Store = {
    page,
    setPage,
  };

  return <StoreContext.Provider value={[Store]}>{props.children}</StoreContext.Provider>;
};
