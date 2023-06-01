const express = require('express');

const router = express.Router();

const {read, update, remove, list,create} = require('../controllers/simulation');

/**
 * region 
 * date debut
 * date fin
 * theme
 * budget
 * nb personnes
 * 
 */
router.post('/simulation', create);
router.get('/simulations', list);
router.get('/simulation/:_id', read);
router.put('/simulation/:_id', update);
router.delete('/simulation/:_id', remove);


module.exports = router;