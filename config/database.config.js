const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(config.mongodbURI, { useNewUrlParser: true });
    const db = mongoose.connection;

    db.once('open', err => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('MongoDB is now connected...');
    });

    db.on('err', err => {
        console.log(err);
    });
};