const mongoose = require('mongoose');

const activitieSchema = new mongoose.Schema({
  lieu: {
    type: String,
    required: true
  },
  durée: {
    type: Number,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  periode: {
    type: String,
    required: true
  }
});

const Activite = mongoose.model('Activite', activitieSchema);

module.exports = Activities;