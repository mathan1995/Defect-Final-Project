import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListProject from "./ListProject";
import FunctionProject from "./ProjectFunction";
import Help from "./Help";
class ProjectIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ListProject} />
          <Route path="/add" exact component={FunctionProject} />
          <Route path="/Help" exact component={Help} />
        </Switch>
      </Router>
    );
  }
}

export default ProjectIndex;
