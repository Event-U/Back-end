const mongoose = require('mongoose')

const needSchema = mongoose.Schema ({
	description: {
		minlength: 5,
		type: String,
		maxlength: 200,
		requerid: true
	},
	service: {
		type: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'service'
		}
	},
	quotation: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'quotation'
		}]
	},
	isAwared: {
		type: Boolean,
		requerid: true,
		default: false
	}
})




module.exports = mongoose.model('Need', needSchema)