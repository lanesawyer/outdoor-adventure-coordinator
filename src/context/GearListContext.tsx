import React, { createContext, useContext, useReducer } from "react";

import { IGearItem } from "../GearItem";
import { Action } from "./Actions";

const GearListContext = createContext<any>({} as any);

export const GearListProvider = ({
  reducer,
  initialState,
  children
}: {
  reducer: React.Reducer<IGearItem[], Action>;
  initialState: IGearItem[];
  children: any;
}) => (
  <GearListContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GearListContext.Provider>
);

export default GearListContext;

export const useGearListContext = () => useContext(GearListContext);
