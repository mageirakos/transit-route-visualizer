const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    dateAuthored: {
        type: Date,
        default: Date.now
    }
}, { collection: 'news' })

// const News = mongoose.model('News', UserSchema)
module.exports = mongoose.model('News', NewsSchema)