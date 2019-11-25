const express = require('express')
const postRouter = express.Router()
const Post = require('../models/Post')

postRouter.route('/')

    .get((req, res) => {
        Post.find((err, posts) =>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(posts)
        })
    })

    .post((req, res) => {
        const newPost = new Post(req.body)
        newPost.save((err, post) =>{
            if(err) return res.status(500).send(err)
            return res.status(201).send(post)
        })
    })

postRouter.route('/:_id')

    .get((req, res) => {
        post.findByIdd(req.params._id, (err, post) =>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(post)
        })
    })

    .put((req, res) =>{
        post.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, post) =>{
                if(err) return res.status(500).send(err)
                return res.status(200).send(post)
            }
        )
    })

    .delete((req, res) =>{
        post.findOneAndDelete(
            {_id: req.params._id},
            (err, post) =>{
                if(err) return res.status(500).send(err)
                return res.status(200).send(post)
            }
        )
    })

module.exports = postRouter