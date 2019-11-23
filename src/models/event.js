const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema ({
	name: {
		type: String,
		minlength: 3,
		maxlength: 200
	},
	description: {
		type: String,
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
		type: String,
		required: false
	},
	organizator: {
		type: String,
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
		default: Date.now(),
		required: true
	},
	updateDate: {
		type: Date,
		default: Date.now(),
		required: true
	},
	isActive: {
		type: Boolean,
		required: true,
		default: true
	},
	needs: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Need'
	}]
}) 

module.exports = mongoose.model('event', eventSchema) 