const express = require('express');

const router = express.Router();

const {read, update, remove, list,create} = require('../controllers/entreprise');

router.post('/entreprise', create);
router.get('/entreprises', list);
router.get('/entreprise/:_id', read);
router.put('/entreprise/:_id', update);
router.delete('/entreprise/:_id', remove);


module.exports = router;