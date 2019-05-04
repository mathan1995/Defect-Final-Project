import React from "react";

import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import Home from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Assignment from "@material-ui/icons/Assignment";

const styles = {
  root: {
    width: 1300
  }
};

class BottomNav extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  routeTest() {
    let path = `/test`;
    this.props.history.push(path);
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          onChange={this.routeTest.bind(this)}
          label="Recents"
          icon={<Home />}
        />
        <BottomNavigationAction label="Favorites" icon={<Assignment />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Test" icon={<RestoreIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomNav);
