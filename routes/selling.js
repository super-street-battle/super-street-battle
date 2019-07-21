const { Player, Cars } = require('../models')

module.exports = app => {
    app.get('/selling', (req, res) => {
        Cars.find({'selling': true})
            .then(cars => res.json(cars))
            .catch(e => console.log(e))
    })
}