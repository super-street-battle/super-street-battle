const { Player, Cars } = require('../models')

module.exports = app => {
    app.get('/garage/:id', (req, res) => {
        Player.findById(req.params.id)
            .populate('cars')
            .exec((err, { cars }) => {
                res.json(cars)
                // console.log(cars)
            })
    })
    app.get('/garage-owner', (req, res) => {
        Cars.find({ 'owner': req.body.owner })
            .then(r => res.json(r))
            .catch(e => console.log(e))
    })
}