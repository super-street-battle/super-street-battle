const { Player, Cars } = require('../models')

module.exports = app => {
    app.get('/players', (req, res) => {
        Player.find({})
            .then(players => res.json(players))
            .catch(e => console.log(e))
    })
    app.get('/players/:id', (req, res) => {
        Player.findById(req.params.id)
            .then(player => res.json(player))
            .catch(e => console.log(e))
    })
    app.post('/players', (req, res) => {
        Player.create(req.body)
            .then(res.sendStatus(200))
            .catch(e => console.error(e))
    })
    app.delete('/players/:id', (req, res) => {
        Player.findByIdAndDelete(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}