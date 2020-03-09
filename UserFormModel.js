const mongoose = require('mongoose');


const FormSchema = mongoose.Schema({

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('form', FormSchema);