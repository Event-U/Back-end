const mongoose = require('mongoose')

const companyBussinesSchema = mongoose.Schema ({
	name: {
		type: String,
		minlength: 5,
		maxlength: 100,
		requrired: true
	},
	createDate: {
		type: Date,
		required: true
	},
	createUpdate: {
		type: Date,
		requerid: true
	}, 
	isActive: {
		type: Boolean,
		required: true,
		default: true
	}
})

module.export = mongoose.model('CompanyBussines', companyBussinesSchema)