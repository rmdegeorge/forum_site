const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8080

app.use(express.json())
app.use('/postList', require('./router/postRouter'))

mongoose.connect('mongodb://localhost:27017/postList', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.log(err)
    })

    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`)
    })