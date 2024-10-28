import { createContext, useState } from "react";

export const DisplayContext = createContext();

export const DisplayContextProvider = ({ children }) => {
  const [ordering, setOrdering] = useState(
    localStorage.getItem("ordering") || "priority"
  );
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status"
  );

  return (
    <DisplayContext.Provider
      value={{ ordering, setOrdering, grouping, setGrouping }}
    >
      {children}
    </DisplayContext.Provider>
  );
};
