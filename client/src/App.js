import React from "react";
import dotenv from "dotenv";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import NoMatch from "./pages/NoMatch";
dotenv.config();
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
