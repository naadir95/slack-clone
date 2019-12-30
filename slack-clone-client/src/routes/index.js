import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

const Home = require('./Home')

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path ="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
