const User = require('../models/user');
const Game = require('../models/game');

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
    Game.find({}, function(err, games) {
        res.render('index', { title: 'All Games', games});
    });
}