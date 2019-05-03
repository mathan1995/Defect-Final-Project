import React, { Component } from "react";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";

class Help extends Component {
  constructor(props) {
    super(props);
    this.routeback = this.routeback.bind(this);
  }

  routeback() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="container">
        <br />
        <button className="btn btn-primary" onClick={this.routeback}>
          <i className="fa fa-plus"> Back</i>
        </button>
        <h1>Help Component</h1>
      </div>
    );
  }
}

export default Help;
