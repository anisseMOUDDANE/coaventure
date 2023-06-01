const Entreprise = require("../models/entreprise");

// Méthode pour créer une entreprise
async function create(req, res) {
  const entrepriseData = req.body;

  try {
    const entreprise = await Entreprise.create(entrepriseData);
    res.status(201).json(entreprise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

// Méthode pour lire une entreprise par son ID
async function read(req, res) {
  const entrepriseId = req.params.id;

  try {
    const entreprise = await Entreprise.findById(entrepriseId);
    if (!entreprise) {
      return res.status(404).json({ message: "Entreprise not found" });
    }

    res.json(entreprise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

// Méthode pour mettre à jour une entreprise
async function update(req, res) {
  const entrepriseId = req.params.id;
  const updatedEntrepriseData = req.body;

  try {
    const entreprise = await Entreprise.findByIdAndUpdate(
      entrepriseId,
      updatedEntrepriseData,
      { new: true }
    );
    if (!entreprise) {
      return res.status(404).json({ message: "Entreprise not found" });
    }

    res.json(entreprise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

// Méthode pour supprimer une entreprise
async function remove(req, res) {
  const entrepriseId = req.params.id;

  try {
    const entreprise = await Entreprise.findByIdAndRemove(entrepriseId);
    if (!entreprise) {
      return res.status(404).json({ message: "Entreprise not found" });
    }

    res.json({ message: "Entreprise removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

// Méthode pour lister toutes les entreprises
async function list(req, res) {
  try {
    const entreprises = await Entreprise.find();
    res.json(entreprises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

module.exports = {
  create,
  read,
  update,
  remove,
  list,
};
