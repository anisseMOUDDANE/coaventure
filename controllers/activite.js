


const Activite = require('../models/activite');

// Méthode pour créer une activité
async function create(req, res) {
  const activiteData = req.body;

  try {
    const activite = await Activite.create(activiteData);
    res.status(201).json(activite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Méthode pour lire une activité par son ID
async function read(req, res) {
  const activiteId = req.params.id;

  try {
    const activite = await Activite.findById(activiteId);
    if (!activite) {
      return res.status(404).json({ message: 'Activite not found' });
    }

    res.json(activite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Méthode pour mettre à jour une activité
async function update(req, res) {
  const activiteId = req.params.id;
  const updatedActiviteData = req.body;

  try {
    const activite = await Activite.findByIdAndUpdate(activiteId, updatedActiviteData, { new: true });
    if (!activite) {
      return res.status(404).json({ message: 'Activite not found' });
    }

    res.json(activite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Méthode pour supprimer une activité
async function remove(req, res) {
  const activiteId = req.params.id;

  try {
    const activite = await Activite.findByIdAndRemove(activiteId);
    if (!activite) {
      return res.status(404).json({ message: 'Activite not found' });
    }

    res.json({ message: 'Activite removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Méthode pour lister toutes les activités
async function list(req, res) {
  try {
    const activites = await Activite.find();
    res.json(activites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  create,
  read,
  update,
  remove,
  list
};
