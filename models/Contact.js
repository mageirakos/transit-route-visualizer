const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { collection: 'contact' })

module.exports = mongoose.model('Contact', ContactSchema)