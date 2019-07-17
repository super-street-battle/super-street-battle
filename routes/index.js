module.exports = app => {
    require('./players.js')(app)
    require('./cars.js')(app)
}