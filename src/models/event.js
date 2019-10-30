const mongoose = required('mongoose')

const eventSchema = new mongoose.Schema ({
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
	image: {
		type: string,
		required: false
	},
	isPay: {
		type: Boolean,
		default: false
	},
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

module.exports = mongoose.model('Event', eventsSchema) 