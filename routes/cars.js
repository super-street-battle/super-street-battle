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
                Player.findOneAndUpdate({ _id: req.body.owner }, { $push: { cars: _id } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch(e => console.error(e))
    })

    // Update Routes
    // carName
    app.put('/cars/:id/carName', (req, res) => {
        // console.log(req.body.nitro)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { carName: req.body.carName } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })
    // owner
    app.put('/cars/:id/owner', (req, res) => {
        // console.log(req.body.owner)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { owner: req.body.owner } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })
    // tire
    app.put('/cars/:id/tire', (req, res) => {
        // console.log(req.body.tire)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { tire: req.body.tire } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })
    // engine
    app.put('/cars/:id/engine', (req, res) => {
        // console.log(req.body.engine)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { engine: req.body.engine } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })
    // bodyKit
    app.put('/cars/:id/bodyKit', (req, res) => {
        // console.log(req.body.bodyKit)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { bodyKit: req.body.bodyKit } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })
    // value
    app.put('/cars/:id/value', (req, res) => {
        // console.log(req.body.value)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { value: req.body.value } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })
    // imageLink
    app.put('/cars/:id/imageLink', (req, res) => {
        // console.log(req.body.imageLink)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { imageLink: req.body.imageLink } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })
    // animation
    app.put('/cars/:id/animation', (req, res) => {
        // console.log(req.body.animation)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { animation: req.body.animation } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })
    // selling
    app.put('/cars/:id/selling', (req, res) => {
        // console.log(req.body.selling)
        Player.findById(req.params.id)
            .then(r => {
                Cars.findOneAndUpdate(r.userName, { $set: { selling: req.body.selling } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch()
    })

    // Delete Routes
    app.delete('/cars/:id', (req, res) => {
        Cars.findByIdAndDelete(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}