const dotenv = require('dotenv').config();

module.exports = {
    developement: {
        "mongodbURI": process.env.MONGODB_CONNECTION,
        "jwtSecret": process.env.JWT_SECRET_KEY,
    },
    production: {}
};
