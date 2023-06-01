const mongoose = require("mongoose");

const simulationSchema = new mongoose.Schema({
  etat: {
    type: int,
    required: true,
  },
  id_activite: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activite",
    required: true,
  },
  nombreDePersonnes: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  dateDebut: {
    type: Date,
    required: true,
  },
  dateFin: {
    type: Date,
    required: true,
  },
});

const Simulation = mongoose.model("Simulation", simulationSchema);

module.exports = Simulation;
