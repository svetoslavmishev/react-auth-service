import passport from 'passport';
import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import config from '../config/config';
import strategy from '../config/passport';

const router = express.Router();
strategy(passport);

router.post('/signup', function(req, res) {
  // TODO ===> ADD SOME VALIDATIONS
  // Check if username and email already exist in DB
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (!username || !email || !password) {
    res.json({ success: false, message: 'Please pass username and password.' });
  } else {
    const newUser = new User({
      username,
      email,
      password
    });

    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({ success: false, message: 'Account already exists.' });
      }
      res.json({ success: true, message: 'Successful created new account.' });
    });
  }
});

router.post('/signin', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({
        success: false,
        message: 'Authentication failed. No Account found.'
      });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          const token = jwt.sign(user.toJSON(), config.developement.secret);
          // return the information including token as JSON
          res.json({ success: true, token });
        } else {
          res
            .status(401)
            .send({ success: false, message: 'Password mismatch.' });
        }
      });
    }
  });
});

module.exports = router;
