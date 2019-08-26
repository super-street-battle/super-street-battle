module.exports = (Schema, model) => {
    const Result = new Schema({
        sender: {
            type: String,
            default: ""
        },
        ptotal: {
            type: Number,
        },
        ototal: {
            type: Number
        },
        receiver: { 
            type: String,
            default: ""
        },
        log: {
            type: Array,
            default: []
        },
        animation: [{
            type: String,
        }]
    })
    return model('Result', Result)
}