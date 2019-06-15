import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './NavigationStyles';


class Navigation extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              MERN Authentication
              </Typography>
            <Button color="inherit" href="/auth/signin">Sign In</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
