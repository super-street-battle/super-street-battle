require('dotenv').config()
const { join } = require('path')
const express = require('express')
const app = express()
// const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

const port = process.env.PORT || 3001

if (port === 3001) {
    var MONGODB_URI = `mongodb://localhost/streetbattle`
} else {
    var MONGODB_URI = process.env.MONGODB_URI
}

require('mongoose').connect(MONGODB_URI,
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
    .then(_ => app.listen(port, () => console.log(`server running on port ${port}`)))
    .catch(e => console.log(e))
