const mongoose = require('mongoose')

const columnSchema = new mongoose.Schema({

	name: {
		type: String,
		minlength: 1,
		maxlength: 100
	},

	tasks: {
		type: [{
	    type: mongoose.Schema.Types.ObjectId,
      ref: 'task'
		}]
	}

})

module.exports = mongoose.model('column', columnSchema)