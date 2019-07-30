module.exports = (Schema, model) => {
    const Challenges = new Schema({
        sender: {
            type: String,
            default: ""
        },
        carId: {
            type: String,
            default: ""
        },
        item: {
            type: String,
            default: ""
        },
        bet: {
            type: Number,
            default: ""
        },
        message: {
            type: String,
            default: ""
        },
        receiver: {
            type: String,
            default: ""
        }
    })
    return model('Challenges', Challenges)
}