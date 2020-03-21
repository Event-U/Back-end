const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: 3,
		maxlength: 100
	},
	description: {
		type: String,
		minlength: 3,
		maxlength: 200
	},
	quotation: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'quotation'
	}

})

module.exports = mongoose.model('task', taskSchema)