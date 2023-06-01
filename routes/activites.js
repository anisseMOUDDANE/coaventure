const express = require('express');

const router = express.Router();

const {read, update, remove, list,create} = require('../controllers/activite');

router.post('/activite', create);
router.get('/activites', list);
router.get('/activite/:_id', read);
router.put('/activite/:_id', update);
router.delete('/activite/:_id', remove);


module.exports = router;