import mongoose, { Schema } from 'mongoose';

// bcrypt-nodejs has been deprecated
// USE yarn add bcrypt
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // role: {
  //   type: String,
  //   required: true
  // },
  // creator: {
  //   userId: String,
  //   name: String
  // },
  date_created: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
