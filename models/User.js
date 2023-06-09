const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  password: {
    type: String,
    required: true
  },
  Nom: {
    type: String,
    required: true
  },
  Prenom: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;