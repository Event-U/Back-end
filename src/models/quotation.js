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
	idNeed: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Need'
	}],
	idAwarded: {
		type: Boolean,
		default: false
	}

})		

module.exports = mongoose.model('quotation', quotationSchema)