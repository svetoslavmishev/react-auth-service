import passport from 'passport';
import express from 'express';
import jwt from 'jsonwebtoken';
import { check, validationResult, checkSchema } from 'express-validator';

import User from '../models/User';
import config from '../config/config';
import strategy from '../config/passport';
import validate from '../helpers/validations';

const router = express.Router();
strategy(passport);

router.post(
  '/signup',
  checkSchema(validate('signup')),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = await new User({
      username,
      email,
      password
    });

    // save the user
    newUser.save(err => {
      if (err) {
        return res.json({
          success: false,
          message: 'Account already exists.'
        });
      }
      res.json({ success: true, message: 'Successful created new account.' });
    });
  }
);

router.post('/signin', checkSchema(validate('signin')), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const email = req.body.email;

  User.findOne({ email }, (err, user) => {
    if (err) throw err;

    if (!user) {
      res.status(401).send({
        success: false,
        message: 'Authentication failed. No Account found.'
      });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, (err, isMatch) => {
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
