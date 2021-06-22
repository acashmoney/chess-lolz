const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    karma: Number,
    // games: [gameSchema],
    googleId: String
})

module.exports = mongoose.model('User', userSchema);