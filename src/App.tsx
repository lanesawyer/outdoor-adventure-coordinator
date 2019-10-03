import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { GearListProvider } from "./context/GearListContext";
import { IGearItem } from "./MyGear/GearItem";
import backpacking from "./defaultLists/backpacking.json";
import Header from "./Header";
import Footer from "./Footer";
import gearListReducer from "./reducers/gearListReducer";
import MyGear from "./MyGear/MyGear";


const App: React.FC = () => {
  const initialState: IGearItem[] =
    JSON.parse(localStorage.getItem("gearList")!) || backpacking;


    const Grid = styled.div`
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-auto-rows: minmax(100px, auto);
      grid-template-areas: 
        "hd main"
        "ft main";
    `;

    const Main = styled.div`
      grid-area: main;
    `;
    
  return (
    <Grid>
      <GearListProvider initialState={initialState} reducer={gearListReducer}>
        <Router>
          <Header />
          <Main>
            <Switch>
              <Route path="/crew">
                <div>Crew goes here</div>
              </Route>
              <Route path="/adventures">
                <div>Adventure goes here</div>
              </Route>
              <Route path="/gear">
                <MyGear />
              </Route>
              <Route path="/">
                <div>Home maybe goes here?</div>
              </Route>
            </Switch>
          </Main>
          <Footer />
        </Router>
      </GearListProvider>
    </Grid>
  );
};

export default App;
