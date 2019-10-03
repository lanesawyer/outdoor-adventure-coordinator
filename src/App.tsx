import React from "react";

import { GearListProvider } from "./context/GearListContext";
import { IGearItem } from "./GearItem";
import backpacking from "./defaultLists/backpacking.json";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import gearListReducer from "./reducers/gearListReducer";

const App: React.FC = () => {
  const initialState: IGearItem[] =
    JSON.parse(localStorage.getItem("gearList")!) || backpacking;

  return (
    <GearListProvider initialState={initialState} reducer={gearListReducer}>
      <Header />
      <Main />
      <Footer />
    </GearListProvider>
  );
};

export default App;
