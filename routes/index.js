module.exports = app => {
    require('./players.js')(app)
    require('./cars.js')(app)
    require('./garage.js')(app)
    require('./selling.js')(app)
    require('./challenge.js')(app)
    require('./result.js')(app)
}