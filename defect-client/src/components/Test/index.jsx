import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./test";
import BottomNav from "./BottomNav";
class TestIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={BottomNav} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default TestIndex;
