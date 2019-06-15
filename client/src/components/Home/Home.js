import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './HomeStyles';


class Home extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} className={classes.image} />
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

