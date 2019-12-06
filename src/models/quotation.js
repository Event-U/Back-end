const mongoose = require('mongoose')

const quotationSchema = mongoose.Schema ({
	provider: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
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
	image: {
		type: String,
		required: false
	},
		need: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Need'
	}],
	status: {
		type: Number,
		required: true,
		default: 1
	}

})		

module.exports = mongoose.model('quotation', quotationSchema)