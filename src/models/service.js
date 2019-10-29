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
		default: Date.now()
	},
	UpdateDate: {
		type: Date,
		default: Date.now()
	},
	isActive: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('Service', serviceSchema)