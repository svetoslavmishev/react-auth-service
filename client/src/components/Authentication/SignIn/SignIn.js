import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../../store/actions';
import styles from './SignInStyles';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = event => {
    event.preventDefault();
    const { signinUser } = this.props;
    const { email, password } = this.state;

    //TODO front-end fields validations
    const userData = { email, password };

    signinUser(userData, this.setToken);
    this.setState({ email: '', password: '' });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  setToken = token => {
    localStorage.setItem('token', token);
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={8} className={classes.image} />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleClick}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/auth/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  signinUser: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      signinUser: Actions.signinUser
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    user: state.app.users
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
);
