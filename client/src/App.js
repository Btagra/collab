import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Form from "./pages/Form";
import App1 from "./components/chat/Chat-App/index";

// import Icon from "./components/chat/Message-Icon/index";

import Compare from './pages/compare.js';


import dotenv from "dotenv";
dotenv.config();


function App() {
  return (
    <BrowserRouter>
      <div>

        <div className="music one">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="music two">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="music three">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/chat" component={App1} />


        </Switch>

      </div>
    </BrowserRouter >
  );
}

export default App;
