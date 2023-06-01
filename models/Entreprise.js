const mongoose = require("mongoose");

const entrepriseSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  secteur: {
    type: String,
    required: true,
  },
  siret: {
    type: String,
    required: true,
  },
  siren: {
    type: String,
    required: true,
  },
  lieu: {
    type: String,
    required: true,
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Entreprise = mongoose.model("Entreprise", entrepriseSchema);

module.exports = Entreprise;
