import React, { createContext, useContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // user
  const [user, setUser] = useState(true);

  return (
    <DataContext.Provider value={{ user }}> {children}</DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
