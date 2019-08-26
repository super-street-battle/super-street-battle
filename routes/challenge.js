const { Challenges } = require('../models')

module.exports = app => {
    app.post('/challenges', (req, res) => {
        Challenges.create(req.body)
        .then(r => res.json(r))
        .catch(e => console.log(e))
    }),

    app.get('/challenges/:id', (req, res) => {
        Challenges.find({ 'receiver': req.params.id })
        .then(r => res.json(r))
        .catch(e => console.error(e))
    })

    app.get('/challenges/view/:id', (req, res) => {
        Challenges.findById(req.params.id)
        .then(r => res.json(r))
        .catch(e => console.error(e))
    })

    app.delete('/challenges/:id', (req, res) => {
        Challenges.deleteOne({ "_id" : req.params.id } )
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}