const mongoose = required('mongoose')

const eventSchema = new mongoose.Schema ({
	eventDate: {
		type: Date,
		required: true
	},
	address: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Address'
		}]
	},
	organizator: {
		type: Number,
		required: true
	},
	investment:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Investement'
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