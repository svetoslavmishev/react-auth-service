module.exports = {
  developement: {
    mongodbURI: process.env.MONGODB_CONNECTION,
    secret: process.env.SECRET_KEY
  },
  qa: {},
  production: {}
};
