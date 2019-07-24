module.exports = (Schema, model) => {
    const Player = new Schema({
        userName: {
            type: String
        },
        uid: {
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
        experience: {
            type: Number
        },
        bankAccount: {
            type: Number
        },
        grippyTires: {
            type: Number
        },
        oil: {
            type: Number
        },
        nitro: {
            type: Number
        },
        cars: [{
            type: Schema.Types.ObjectId,
            ref: 'Cars'
        }]
    })

    return model('Player', Player)
}