module.exports = (Schema, model) => {
    const Player = new Schema({
        userName: {
            type: String
        },
        imageLink: {
            type: String
        },
        win: {
            type: Number
        },
        loss: {
            type: Number
        },
        tie: {
            type: Number
        },
        xp: {
            type: Number
        },
        bankAccount: {
            type: Number
        },
        inventory: [{
            grippyTires: Number,
            oil: Number,
            nitro: Number
        }],
        cars: [{
            type: Schema.Types.ObjectId,
            ref: 'Cars'
        }]
    })

    return model('Player', Player)
}