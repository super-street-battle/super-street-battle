const { Player, Cars } = require('../models')

module.exports = app => {
    // show all cars listed as selling
    app.get('/selling', (req, res) => {
        Cars.find({ 'selling': true })
            .then(cars => res.json(cars))
            .catch(e => console.log(e))
    })
    // show all cars being sold by a player
    app.get('/selling/:id', (req, res) => {
        Player.findById(req.params.id)
            .populate({
                path: 'cars',
                match: { selling: true }
            })
            .exec((err, cars) => {
                res.json(cars)
            })
    })
}