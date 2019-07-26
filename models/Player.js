module.exports = (Schema, model) => {
    const Player = new Schema({
        userName: {
            type: String,
            default: ""
        },
        uid: {
            type: String,
            default: ""
        },
        win: {
            type: Number,
            default: "0"
        },
        loss: {
            type: Number,
            default: "0"
        },
        tie: {
            type: Number,
            default: "0"
        },
        experience: {
            type: Number,
            default: "0"
        },
        bankAccount: {
            type: Number,
            default: "5000"
        },
        grippyTires: {
            type: Number,
            default: "0"
        },
        oil: {
            type: Number,
            default: "0"
        },
        nitro: {
            type: Number,
            default: "0"
        },
        cars: [{
            type: Schema.Types.ObjectId,
            ref: 'Cars'
        }]
    })

    return model('Player', Player)
}