const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8080

app.use(express.json())
app.use('/postList', require('./routes/postRouter'))
app.use('/comment', require('./routes/commentRouter'))

mongoose.connect(
    'mongodb://localhost:27017/postList', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false
    })
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.log(err)
    })

    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`)
    })