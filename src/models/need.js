const mongoose = require('mongoose')

const needSchema = mongoose.Schema ({
	description: {
		type: String,
		minlength: 10,
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
	event: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Event'
		}]
	}
})

module.exports = mongoose.model('Need', needSchema)