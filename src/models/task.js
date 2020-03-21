// model task
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
	needs: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Need'
	}]

})

module.exports = mongoose.model('task', taskSchema)