const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: "An Interesting Title"
    },
    body: {
        type: String,
        required: true
    },
    tags: [String],
    username: String,
    created: {
        type: Date,
        default: Date.now
    },
    votes: Number
})

module.exports = mongoose.model('Post', postSchema)