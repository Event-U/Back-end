const mongoose = require('mongoose')

const needSchema = mongoose.Schema ({
	description: {
		type: String,
		minlength: 5,
		maxlength: 200,
		requerid: true
	},
	date: {
		type: Date,
		required: true
	}, 
	service: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Services'
		}]
	},
	quotes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'quotation'
	}]
})

module.exports = mongoose.model('Need', needSchema)