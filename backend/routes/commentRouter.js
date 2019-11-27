const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/Comment')


commentRouter.route('/')

    .get((req, res) =>{
        Comment.find((err, comments) =>{
            if (err) res.status(500).send(err)
            return res.status(200).send(comments)
        })
    })

commentRouter.route('/:postID')

    .get((req, res) => {
        Comment.find({ post: req.params.postID }, (err, comments) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(comments)
        })
    })

    .post((req, res) => {
        req.body.post = req.params.postID
        const newComment = new Comment(req.body)
        newComment.save((err, comment) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(comment)
        })
    })

// Get one comment
commentRouter.route('/OneComment/:_id')
  .get((req, res) => {
    Comment.findById(req.params._id, (err, comment) => {
      if (err) return res.status(500).send(err)
      return res.status(200).send(comment)
    })
  })

commentRouter.route('/:_id')

    .put((req, res) => {
        Comment.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            { new: true },
            (err, comment) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(comment)
            }
        )
    })

    .delete((req, res) => {
        Comment.findOneAndDelete(
            { _id: req.params._id },
            (err, comment) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(comment)
            }
        )
    })

module.exports = commentRouter
