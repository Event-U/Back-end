const mongoose = require('mongoose')

const catServicesSchema = mongoose.Schema({
	name: {
		type : String,
		minlength: 5,
		maxlength: 30,
		required: true
	},
	description: {
		type: String,
		minlength: 10,
		maxlength: 200,
		requerid: true
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

module.exports = mongoose.model('catServices')