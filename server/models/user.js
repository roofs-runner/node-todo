const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
      required: true,
      minlength: 1,
      trim: true,
      unique: true,
      validate: {
      validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
      required: true,
      minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

userSchema.methods.toJSON = function () {
  let user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

userSchema.methods.generateAuthToken = function () {
  let user = this;
  const access = 'auth';
  const token = jwt.sign({_id: user._id.toHexString(), access}, 'abc').toString();

  user.tokens = user.tokens.concat([{access, token}]);

  return user.save().then(() => {
    return token;
  });
};

const User = mongoose.model('User', userSchema);

module.exports = {User};
