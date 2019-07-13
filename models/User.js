import mongoose, { Schema } from 'mongoose';
import encryption from '../helpers/encryption';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
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
  role: {
    type: String,
    required: true
  },
  creator: {
    userId: String,
    name: String,
  },
  date_created: {
    type: Date,
    default: Date.now
  }
});

userSchema.method({
  authenticate: (password) => {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

//TODO
// Check if user exist or seedadmin user
