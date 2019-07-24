module.exports = (Schema, model) => {
    const Cars = new Schema({
        carName: {
            type: String,
            default: ""
        },
        carNickname:{
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        uid: {
            type: String,
            default: ""
        },
        owner: {
            type: String,
            default: ""
        },
        tire: {
            type: Number,
            default: "0"
        },
        engine: {
            type: Number,
            default: "0"
        },
        bodyKit: {
            type: Number,
            default: "0"
        },
        value: {
            type: Number,
            default: "0"
        },
        imageLink: {
            type: String,
            default: ""
        },
        animation: {
            type: String,
            default: ""
        },
        selling: {
            type: Boolean,
            default: false
        }
    })
    return model('Cars', Cars)
}