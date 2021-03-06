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
import { withSnackbar } from 'notistack';

import styles from './SignUpStyles';
import * as Actions from '../../../store/actions';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleClick = event => {
    event.preventDefault();
    const { signupUser, history } = this.props;
    const { firstName, lastName } = this.state;

    //TODO front-end fields validations
    const newUser = {
      username: `${firstName} ${lastName}`,
      email: this.state.email,
      password: this.state.password
    };

    signupUser(newUser);
    history.push('/auth/signin');
    this.setState({ firstName: '', lastName: '', email: '', password: '' });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { firstName, lastName, email, password } = this.state;
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
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    value={firstName}
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    value={lastName}
                    name="lastName"
                    autoComplete="lname"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
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
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleClick}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/auth/signin" variant="body2">
                    Already have an account? Sign in
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

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  signupUser: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      signupUser: Actions.signupUser
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {};
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withSnackbar(SignUp))
);
