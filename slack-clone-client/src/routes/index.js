import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

const Home = require('./Home')

function App() {
  return (
    <div>
      <h1>
        Home
        <Nav/>
      </h1>
    </div>
    // <BrowserRouter>
    //   <Switch>
    //     <Route path ="/" exact component={Home}/>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
