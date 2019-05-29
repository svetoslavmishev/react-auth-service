import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  paper: {
    maxWidth: '100%',
    height: '100vh',
    margin: 'auto',
    overflow: 'hidden',
    fontSize: theme.typography.fontSize,
    backgroundColor: '#f3f3f3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Content extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        Content
    </Paper>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);