const mongoose = require('mongoose')

const needQoutation = new mongoose.Schema({
	need: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'need'
}],
	quotation: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'quotation'
	}]
})

module.exports = mongoose.model('needQuotation', needQoutation)