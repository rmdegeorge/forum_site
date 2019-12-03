const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    topic: {
        type: Schema.Types.ObjectId,
        ref: "Topic",
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
    votes: {
        type: Number,
        default: 0 
    } 
})

module.exports = mongoose.model('Post', postSchema)