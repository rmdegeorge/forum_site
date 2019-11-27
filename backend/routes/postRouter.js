const express = require('express')
const postRouter = express.Router()
const Post = require('../models/Post')

postRouter.route('/')

    .get((req, res) =>{
        Post.find((err, posts) =>{
            if(err) res.status(500).send(err)
            return res.status(200).send(posts)
        })
    })

postRouter.route('/:topicID')

    .get((req, res) => {
        Post.find({ topic: req.params.topicID }, (err, posts) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(posts)
        }).populate('comments')
    })

    .post((req, res) => {
        req.body.topic = req.params.topicID
        const newPost = new Post(req.body)
        newPost.save((err, post) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(post)
        })
    })

// Get One Post
postRouter.route('/OnePost/:_id')
  .get((req, res) => {
    Post.findById(req.params._id, (err, post) => {
      if (err) return res.status(500).send(err)
      return res.status(200).send(post)
    }).populate('comments')
  })

postRouter.route('/:_id')
  
    .put((req, res) => {
        Post.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            { new: true },
            (err, post) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(post)
            }
        ).populate('comments')
    })

    .delete((req, res) => {
        Post.findOneAndDelete(
            { _id: req.params._id },
            (err, post) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(post)
            }
        )
    })

module.exports = postRouter
