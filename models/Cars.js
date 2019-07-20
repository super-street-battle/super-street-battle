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
        },
        tire: {
            type: Number
        },
        engine: {
            type: Number
        },
        bodyKit: {
            type: Number
        },
        value: {
            type: Number
        },
        imageLink: {
            type: String
        },
        animation: {
            type: String
        },
        selling: {
            type: Boolean
        },
    })

    return model('Car', Car)
}