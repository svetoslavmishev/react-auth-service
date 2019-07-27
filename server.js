import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

import database from './config/database.config';
import config from './config/config';

// Coniguration
const port = process.env.PORT || 5033;
const env = process.env.NODE_ENV || 'developement';
const app = express();

// Middlewares
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use(logger('dev'));
app.use(cookieParser());
app.use(
  session({ secret: 'shhsecret', resave: true, saveUninitialized: true })
);

// Connect with mongoDB
database(config[env]);

// Serve the public folder as static assets
app.use('/static', express.static('./public'));

// Routes
app.use('/api/v1/users', require('./routes/users'));
// app.use('/api/v1/auth', require('./routes/auth'));

// global 404 error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler with stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//global error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port, console.log(`Server running at http://localhost:${port}`));
