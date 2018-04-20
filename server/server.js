const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false},
  completedAt: {
    type: Number,
    default: null
  }
});

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

const newUser = new User({email: 'kinogovno@ttt.com   '});

newUser.save().then((doc) => {
  console.log('Saved User: ', doc);
}, (e) => {
  console.log('Cannot save!', e);
});