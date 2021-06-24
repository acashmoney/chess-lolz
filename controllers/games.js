const Game = require('../models/game');

module.exports = {
    index,
    show,
    new: newGame,
    create
}

function index(req, res) {
    Game.find({}, function(err, games) {
        res.render('index', { title: 'All Games', games});
    });
}

function show(req, res) {
    Game.findById(req.params.id, function(err, games) {
        res.render('games/show', {
            title: 'Post Details', games
        })
    });
}

function newGame(req, res) {
    const newGame = new Game();
    res.render('games/new', {title: 'Create Post'});
}

function create(req, res) {
    const game = new Game(req.body);
    const gameId = game.gameUrl.split('/')[3];
    game.gameUrl = `https://lichess.org/embed/${gameId}?theme=blue2&bg=auto`;

    game.save(function(err) {
        if (err) return res.redirect('/games/new');
        console.log(game);
        res.redirect(`/games/${game._id}`)
    })
}