const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const gamesCtrl = require('../controllers/games');

router.get('/', usersCtrl.index);
router.post('/games', isLoggedIn, usersCtrl.addGame);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('auth/google');
}

module.exports = router;