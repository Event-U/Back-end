const mongoose = require('mongoose')

const needSchema = mongoose.Schema ({
	description: {
		type: String,
		minlength: 10,
		maxlength: 200,
		requerid: true
	},
	updateDate: {
		type: Date,
		required: true
	}, 
	service: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Services'
		}]
	},
	userProvider: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
	},
	event: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Event'
		}]
	},
	createDate: {
		type: Date,
		required: true
	},
	updateDate: {
		type: Date,
		required: true
	}, 
	isActive: {
		type: Boolean,
		require: true,
		default: true
	}
})

module.exports = mongoose.model('Need', needSchema)