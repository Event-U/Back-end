const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema ({
	name: {
		type: String,
		minlength: 3,
		maxlength: 200
	},
	description: {
		type: String,
		minlength: 5,
		maxlength: 200
	},
	date: {
		type: Date,
		required: true
	},
	address: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Address'
	},
	image: {
		type: String,
		required: false
	},
	organizator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
},
	investments: {
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Investment'
		}]
	},
	needs: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Need'
	}]
}) 

module.exports = mongoose.model('event', eventSchema) 