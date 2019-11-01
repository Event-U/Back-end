const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
	name: {
		type: String,
		minlength: 5,
		maxlength: 200,
		required: true
	},
	description: {
		type: String,
		minlength: 10,
		maxlength: 200,
		required: true
	},
	measurementUnit: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: true
	},
	unitPrice: {
		type: Number,
		minlength: 1,
		required: true
	},
	createDate: {
		type: Date,
		required: true,
		default: Date.now()
	},
	updateDate: {
		type: Date,
		required: true,
		default: Date.now()
	},
	isActive: {
		type: Boolean,
		required: true,
		default: true
	}
})

module.exports = mongoose.model('service', serviceSchema)