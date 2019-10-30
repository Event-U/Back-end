const mongoose = require('mongoose')

const companyBussineSchema = mongoose.Schema ({
	name: {
		type: String,
		minlength: 5,
		maxlength: 100,
		requrired: true
	},
	createDate: {
		type: Date,
		required: true,
		default: Date.now()  
	},
	updateDate: {
		type: Date,
		requerid: true,
		default: Date.now()  
	}, 
	isActive: {
		type: Boolean,
		required: true,
		default: true
	}
})

module.exports = mongoose.model('companyBussine', companyBussineSchema)