import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Import required styles.
import './App.css';
import "@blueprintjs/core/lib/css/blueprint.css";

import { NotFound, Dashboard, Login, Signup} from './containers';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={ Login }/>
          <Route path="/signup" component={ Signup }/>
          <Route path="/dashboard" component={ Dashboard }/>
          <Route component={ NotFound }/>
      </Switch>
    </Router>
  );
}

export default App;
