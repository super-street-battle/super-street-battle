const { Schema, model } = require('mongoose')

const db = {
    Player: require('./Player.js')(Schema, model),
    Cars: require('./Cars.js')(Schema, model),
    Challenges: require('./challenge.js')(Schema, model),
    Result: require('./result.js')(Schema, model)
}

module.exports = db