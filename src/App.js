import React from "react";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview/Preview";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="app-body">
          <Switch>
            <Route path="/preview" component={Preview} />
            <Route exact path="/" component={WebcamCapture} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
