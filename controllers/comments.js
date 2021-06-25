const Game = require('../models/game');

module.exports = {
    create,
    delete: deleteComment
}

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
        const comment = {
            author: req.user._id,
            ...req.body
        };
        game.comments.push(comment);
        game.save(function(err) {
            res.redirect(`/games/${game._id}`);
        });
    });
}

function deleteComment(req, res) {
    Game.findById(req.params.id, function(err, comment) {
        
    })
}