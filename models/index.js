const { Schema, model } = require('mongoose')

const db = {
    Player: require('./Player.js')(Schema, model),
    Cars: require('./Cars.js')(Schema, model)
}

module.exports = db