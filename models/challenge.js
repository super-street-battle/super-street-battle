module.exports = (Schema, model) => {
    const Challenges = new Schema({
        sender: {
            type: String,
            default: ""
        },
        sendername: {
            type: String,
            default: ""
        },
        pengine: {
            type: Number,
            default: null
        },
        pbodyKit: {
            type: Number,
            default: null
        },
        ptotal: {
            type: Number,
            default: null
        },
        ptire: {
            type: Number,
            default: null
        },
        item: {
            type: String,
            default: ""
        },
        bet: {
            type: Number,
            default: ""
        },
        animation: [{
            type: String,
        }],
        message: {
            type: Object,
            default: ""
        },
        location: {
            type: Object,
            default: ""
        },
        receiver: {
            type: String,
            default: ""
        }
    })
    return model('Challenges', Challenges)
}