const express = require('express')
const topicRouter = express.Router()
const Topic = require('../models/Topic')

topicRouter.route('/')

    .get((req, res) => {
        Topic.find((err, topics) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(topics)
        })
    })

    .post((req, res) => {
        const newTopic = new Topic(req.body)
        newTopic.save((err, topic) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(topic)
        })
    })

topicRouter.route('/:_id')

    .get((req, res) => { 
        Topic.findById(req.params._id, (err, topic) =>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(topic)
        })
    })

    .put((req, res) => {
        Topic.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            { new: true },
            (err, topic) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(topic)
            }
        ).populate('comments')
    })

    .delete((req, res) => {
        Topic.findOneAndDelete(
            { _id: req.params._id },
            (err, topic) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(topic)
            }
        )
    })

module.exports = topicRouter