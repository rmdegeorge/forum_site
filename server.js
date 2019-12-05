const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8080

app.use(express.json())
app.use('/topics', require('./routes/topicRouter'))
app.use('/Posts', require('./routes/postRouter'))
app.use('/comments', require('./routes/commentRouter'))

mongoose.connect(
    'mongodb://localhost:27017/forum',
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