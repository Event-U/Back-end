const mongoose = require('mongoose')

const catServicesSchema = new mongoose.Schema({
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
		default: Date.now()
	},
	updateDate: {
		type: Date,
		default: Date.now()
	}, 
	isActive: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('catServices', catServicesSchema)