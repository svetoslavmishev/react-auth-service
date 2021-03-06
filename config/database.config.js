import mongoose from 'mongoose';
import dotenv from 'dotenv';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
dotenv.config();

if (process.env.MONGODB_CONNECTION != '') {
  mongoose
    .connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true })
    .catch(err => {
      console.log('*** Can Not Connect to Mongo Server');
    });

  const db = mongoose.connection;
  module.exports = () => db;

  db.once('open', () => {
    console.log('=====> ✔ MongoDB is now connected...');
  });
  db.on('error', error => {
    console.log(`Database error: ${error}`);
  });
  // End of Mongoose Setup
} else {
  console.log('No Mongo Credentials Given');
}
