const User = require('../models/user');

module.exports = {
    index,
    addGame
}

function addGame(req, res) {
    req.user.games.push(req.body);
    req.user.save(function(err) {
        res.redirect('/');
    })
}

function index(req, res, next) {
    res.render('index');
}