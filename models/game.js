const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentText: {
        type: String
    },
    commentScore: {
        type: Number
    }
})

const gameSchema = new Schema({
    gameTitle: {
        type: String,
        required: true
    },
    gameText: {
        type: String
    },
    gameUrl: {
        type: String,
        required: true
    },
    gameScore: {
        type: Number
    },
    comments: {
        type: [commentSchema]
    }
})

module.exports = mongoose.model('Game', gameSchema);