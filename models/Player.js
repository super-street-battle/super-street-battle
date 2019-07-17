module.exports = (Schema, model) => {
    const Player = new Schema({
        name: {
            type: String
        },
        age: {
            type: Number
        },
        cars: [{
            type: Schema.Types.ObjectId,
            ref: 'Cars'
        }]
    })

    return model('Player', Player)
}