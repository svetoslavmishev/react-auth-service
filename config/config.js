import dotenv from 'dotenv';

const environement = dotenv.config();

module.exports = {
    developement: {
        "mongodbURI": process.env.MONGODB_CONNECTION,
        "token": process.env.JWT_SECRET_KEY,
    },
    production: {}
};
