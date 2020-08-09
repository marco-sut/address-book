import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './lib/ui/Navbar';
import Header from './lib/ui/Header';
import Content from './lib/ui/Content';
import List from './pages/List';
import Details from './pages/Details';
import { StateProvider, initialState, reducer } from './lib/context/State';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar />
        <Header text="UBS Address Book" />
        <Content>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
        </Content>
      </StateProvider>
    </Router>
  );
}

export default App;
