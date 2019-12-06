const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
	name: {
		type : String,
		minlength: 5,
		maxlength: 50,
		required: true
	},
	description: {
		type: String,
		minlength: 10,
		maxlength: 200,
		requerid: true
	}
})

module.exports = mongoose.model('category', categorySchema)