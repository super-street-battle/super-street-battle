module.exports = (Schema, model) => {
    const Cars = new Schema({
        carName: {
            type: String
        },
        carNickname:{
            type: String
        },
        type: {
            type: String
        },
        uid: {
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
        }
    })

    return model('Cars', Cars)
}