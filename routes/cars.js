const { Player, Cars } = require('../models')

module.exports = app => {
    // get all cars
    app.get('/cars', (req, res) => {
        Cars.find({})
            .then(cars => res.json(cars))
            .catch(e => console.log(e))
    })
    // get a car by its id
    app.get('/cars/:id', (req, res) => {
        Cars.findById(req.params.id)
            .then(car => res.json(car))
            .catch(e => console.log(e))
    })
    // Create a new car and add to players document
    app.post('/cars', (req, res) => {
        Cars.create(req.body)
            .then(({ _id }) => {
                // Player.findOneAndUpdate({ userName: req.body.owner }, { $push: { cars: _id } })
                Player.findOneAndUpdate({ uid: req.body.uid }, { $push: { cars: _id } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch(e => console.error(e))
    })

    // Update Routes

    // add a car to a player
    app.put('/cars/:id/add-car', (req, res) => {
        Cars.findById(req.params.id)
            .then(({ _id }) => {
                Player.findOneAndUpdate({ _id: req.body._id }, { $push: { cars: _id } })
                    .then(_ => res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))
    })
    // carName
    app.put('/cars/:id/carName', (req, res) => {
        // console.log(req.body.nitro)
        Cars.findByIdAndUpdate(req.params.id, { $set: { carName: req.body.carName } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // carNickname
    app.put('/cars/:id/carNickname', (req, res) => {
        // console.log(req.body.nitro)
        Cars.findByIdAndUpdate(req.params.id, { $set: { carNickname: req.body.carNickname } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // owner
    app.put('/cars/:id/owner', (req, res) => {
        // console.log(req.body.owner)
        Cars.findByIdAndUpdate(req.params.id, { $set: { owner: req.body.owner } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // uid
    app.put('/cars/:id/uid', (req, res) => {
        // console.log(req.body.uid)
        Cars.findByIdAndUpdate(req.params.id, { $set: { uid: req.body.uid } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // tire
    app.put('/cars/:id/tire', (req, res) => {
        // console.log(req.body.tire)
        Cars.findByIdAndUpdate(req.params.id, { $set: { tire: req.body.tire } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // engine
    app.put('/cars/:id/engine', (req, res) => {
        // console.log(req.body.engine)
        Cars.findByIdAndUpdate(req.params.id, { $set: { engine: req.body.engine } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // bodyKit
    app.put('/cars/:id/bodyKit', (req, res) => {
        // console.log(req.body.bodyKit)
        Cars.findByIdAndUpdate({_id: req.params.id}, { $set: { bodyKit: req.body.bodyKit } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // value
    app.put('/cars/:id/value', (req, res) => {
        // console.log(req.body.value)
        Cars.findByIdAndUpdate(req.params.id, { $set: { value: req.body.value } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // imageLink
    app.put('/cars/:id/imageLink', (req, res) => {
        // console.log(req.body.imageLink)
        Cars.findByIdAndUpdate(req.params.id, { $set: { imageLink: req.body.imageLink } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // animation
    app.put('/cars/:id/animation', (req, res) => {
        // console.log(req.body.animation)
        Cars.findByIdAndUpdate(req.params.id, { $set: { animation: req.body.animation } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // selling
    app.put('/cars/:id/selling', (req, res) => {
        Cars.findByIdAndUpdate(req.params.id, { $set: { selling: req.body.selling } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // Delete Routes
    app.delete('/cars/:id', (req, res) => {
        Cars.findByIdAndDelete(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}