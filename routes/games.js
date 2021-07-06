const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);
router.get('/:id/edit', gamesCtrl.edit);
router.get('/new', gamesCtrl.new);
router.get('/:id', gamesCtrl.show);
router.post('/', gamesCtrl.create);
router.put('/:id', gamesCtrl.update);
router.delete('/:id', gamesCtrl.delete);

module.exports = router;