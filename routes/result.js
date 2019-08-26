const { Result } = require('../models')

module.exports = app => {
    app.post('/result', (req, res) => {
        Result.create(req.body)
        .then(r => res.json(r))
        .catch(e => console.log(e))
    }),

    app.get('/result/:id', (req, res) => {
        Result.find({ 'receiver': req.params.id })
        .then(r => res.json(r))
        .catch(e => console.error(e))
    })
    
    app.get('/result/view/:id', (req, res) => {
        Result.findById(req.params.id)
        .then(r => res.json(r))
        .catch(e => console.error(e))
    })

    app.delete('/result/:id', (req, res) => {
        Result.deleteOne({ "_id" : req.params.id } )
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}