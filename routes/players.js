const { Player, Cars, Inventory } = require('../models')

module.exports = app => {
    app.get('/players', (req, res) => {
        Player.find().sort({ xp: -1}).limit(10)
            .then(players => res.json(players))
            .catch(e => console.log(e))
    })
    app.get('/players/:id', (req, res) => {
        Player.findById(req.params.id)
            .then(player => res.json(player))
            .catch(e => console.log(e))
    })

    // Create a player
    app.post('/players', (req, res) => {
        Player.create(req.body)
            .then(res.sendStatus(200))
            .catch(e => console.error(e))
    })

    // Update Routes by id
    // update tires
    app.put('/players/:id/grippyTires', (req, res) => {
        // console.log(req.body.grippyTires)
        Player.findOneAndUpdate(req.params.id, { $set: { grippyTires:  req.body.grippyTires}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update oil
    app.put('/players/:id/oil', (req, res) => {
        // console.log(req.body.oil)
        Player.findOneAndUpdate(req.params.id, { $set: { oil:  req.body.oil}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update nitro
    app.put('/players/:id/nitro', (req, res) => {
        // console.log(req.body.nitro)
        Player.findOneAndUpdate(req.params.id, { $set: { grippyTires:  req.body.nitro}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update win
    app.put('/players/:id/win', (req, res) => {
        // console.log(req.body.win)
        Player.findOneAndUpdate(req.params.id, { $set: { grippyTires:  req.body.win}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update loss
    app.put('/players/:id/loss', (req, res) => {
        // console.log(req.body.loss)
        Player.findOneAndUpdate(req.params.id, { $set: { grippyTires:  req.body.loss}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update tie
    app.put('/players/:id/tie', (req, res) => {
        // console.log(req.body.tie)
        Player.findOneAndUpdate(req.params.id, { $set: { grippyTires:  req.body.tie}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update xp
    app.put('/players/:id/xp', (req, res) => {
        // console.log(req.body.xp)
        Player.findOneAndUpdate(req.params.id, { $set: { grippyTires:  req.body.xp}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update bankAccount
    app.put('/players/:id/bankAccount', (req, res) => {
        // console.log(req.body.bankAccount)
        Player.findOneAndUpdate(req.params.id, { $set: { grippyTires:  req.body.bankAccount}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update inageLink
    app.put('/players/:id/inageLink', (req, res) => {
        // console.log(req.body.inageLink)
        Player.findOneAndUpdate(req.params.id, { $set: { grippyTires:  req.body.inageLink}})
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // Delete Routes

    app.delete('/players/:id', (req, res) => {
        Player.findByIdAndDelete(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}