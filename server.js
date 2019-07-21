require('dotenv').config()
const { join } = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(require('./routes'))

const options = {
    //useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 100, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
}

// Connect to Mongo
mongoose
    .connect(process.env.MONGODB_URI, options, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true 
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server started on port ${port}`));