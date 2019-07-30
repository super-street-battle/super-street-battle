module.exports = (Schema, model) => {
    const Result = new Schema({
        winner: {
            type: String,
            default: ""
        },
        wscore: {
            type: Number,
        },
        lscore: {
            type: Number
        },
        winnweId: { 
            type: String,
            default: ""
        },
        log: {
            type: String,
            default: ""
        },
        animation: {
            type: String,
            default: ""
        },
        bet: {
            type: Number,
            default: ""
        }
    })
    return model('Result', Result)
}