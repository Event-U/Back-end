const mongoose = require('mongoose')

const needSchema = mongoose.Schema({
    description: {
        minlength: 5,
        type: String,
        maxlength: 200,
        required: true
    },
    service: {
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'services',
            required: true
        }
    },
    quotation: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'quotation'
        }]
    },
    isAwared: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Need', needSchema)