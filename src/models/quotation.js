const mongoose = require('mongoose')

const quotationSchema = mongoose.Schema ({
	provider: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}, 
	description: {
		type: String,
		maxlength: 200,
		required: true
	},
	idNeed: {
		type: String,
		required: true
	},
	idAwarded: {
		type: Boolean,
		default: false
	}

})

module.exports = mongoose.model('quotation', quotationSchema)