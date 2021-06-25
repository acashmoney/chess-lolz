const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
    author: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    comments: {
        type: [commentSchema]
    }
})

module.exports = mongoose.model('Game', gameSchema);