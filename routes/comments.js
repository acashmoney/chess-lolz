const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/games/:id/comments', commentsCtrl.create);
router.delete('/games/:id/comments/:id', commentsCtrl.delete);

module.exports = router;