const validate = key => {
  if (key === 'signin') {
    return {
      email: {
        in: ['body'],
        isEmail: true,
        errorMessage: 'Please enter a valid email address'
      }
    };
  }

  return {
    username: {
      in: ['body'],
      isLength: {
        options: { min: 6, max: 20 },
        errorMessage: 'Username should be between 6 and 20 chars long'
      },
      trim: true
    },
    email: {
      in: ['body'],
      isEmail: true,
      errorMessage: 'Please enter a valid email address'
    },
    password: {
      in: ['body'],
      matches: {
        options: [/\d/, { min: 6 }],
        errorMessage:
          'The password must be at least 6 chars long and contain a number'
      }
    }
  };
};

module.exports = validate;
