const { deleteOne } = require('../models/game');
const Game = require('../models/game');

module.exports = {
    create,
    update
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

function update(req, res) {
    Game.findByIdAndUpdate(req.params.id, {'comments.0.commentText': req.params.newCommentText})
    console.log('FLAG BELOW');
    console.log(req.params);
}