import React from "react";
import PropTypes from "prop-types";
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
        <BottomNavigationAction label="Recents" icon={<Home />} />
        <BottomNavigationAction label="Favorites" icon={<Assignment />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Test" icon={<RestoreIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomNav);
