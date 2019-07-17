module.exports = (Schema, model) => {
    const Car = new Schema({
        carName: {
            type: String
        },
        type: {
            type: String
        },
        owner: {
            type: String
        }
    })

    return model('Car', Car)
}