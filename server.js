require('dotenv').config()
const { join } = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

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

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server started on port ${port}`));

function dbConnection() {
    if (port === 3001) {
        return `mongodb://localhost/streetbattle`
    } else {
        return process.env.MONGODB_URI
    }
}

// Connect to Mongo
mongoose.connect(dbConnection(), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));