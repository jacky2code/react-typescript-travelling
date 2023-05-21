import React, { useState, PropsWithChildren } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContextValue: AppStateValue = {
  username: "Gking",
  shoppingCart: { items: [] },
};

export const appContext = React.createContext(defaultContextValue);

export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <appContext.Provider value={state}>{props.children}</appContext.Provider>
  );
};
