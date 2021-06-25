const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/games/:id/comments', commentsCtrl.create);
router.put('/games/:id/comments/:commentIndex/', commentsCtrl.update);

module.exports = router;