module.exports = (Schema, model) => {
    const Cars = new Schema({
        carName: {
            type: String,
            default: ""
        },
        uid: {
            type: String,
            default: ""
        },
        tire: {
            type: Number,
            default: "1"
        },
        engine: {
            type: Number,
            default: "1"
        },
        bodyKit: {
            type: Number,
            default: "1"
        },
        value: {
            type: Number,
            default: "800"
        },
        imageLink: {
            type: String,
            default: ""
        },
        animation: [{
            type: String,
        }],
        selling: {
            type: Boolean,
            default: false
        }
    })
    return model('Cars', Cars)
}