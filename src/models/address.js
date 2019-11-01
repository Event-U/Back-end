const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
	street: {
		type: String,
		minlength: 3,
		maxlength: 100,
		required: true
	},
	numberExt: {
		type: String,
		minlength: 1,
		maxlength: 50,
		required: true
	},
	numberInt: {
		type: String,
		minlength: 1,
		maxlength: 50,
		required: true
	},
	place: {
		type: String,
		minlength: 1,
		maxlength: 50,
		required: true
	},
	town: {
		type: String,
		minlength: 1,
		maxlength: 50,
		required: true,
	},
	state: {
		type: String,
		minlength: 1,
		maxlength: 50,
		required: true
	},
	CP: {
		type: Number,
		minlength: 5,
		required: true
	},
	isFiscal: {
		type: Boolean,
		default: true,
		required: true
	},
	isPhisical:{
		type: Boolean,
		defaul: false,
		required: true
	},
	users: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
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
		required: true,
		default: false
	}
})

module.exports = mongoose.model('Address', addressSchema)