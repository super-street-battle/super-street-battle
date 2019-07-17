const { Player, Cars } = require('../models')

module.exports = app => {
    app.get('/cars', (req, res) => {
        Cars.find({})
            .then(cars => res.json(cars))
            .catch(e => console.log(e))
    })
    app.get('/cars/:id', (req, res) => {
        Cars.findById(req.params.id)
            .then(car => res.json(car))
            .catch(e => console.log(e))
    })
    app.post('/cars', (req, res) => {
        Cars.create(req.body)
            .then(({ _id }) => {
                Player.findOneAndUpdate({ name: req.body.owner }, { $push: { cars: _id } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch(e => console.error(e))
    })
    app.delete('/cars/:id', (req, res) => {
        Cars.findByIdAndDelete(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}