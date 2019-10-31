const mongoose = required('mongoose')

const eventSchema = new mongoose.Schema ({
	name: {
		type: String,
		minlength: 10,
		maxlength: 50
	},
	description: {
		type: string,
		minlength: 5,
		maxlength: 200
	},
	date: {
		type: Date,
		required: true
	},
	addresses: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Address'
		}]
	},
	image: {
		type: string,
		required: false
	},
	organizator: {
		type: Number,
		required: true
	},
	investments: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Investment'
		}]
	},
	isPay: {
		type: Boolean,
		default: false
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
		required: true,
		default: true
	}
}) 

module.exports = mongoose.model('event', eventsSchema) 