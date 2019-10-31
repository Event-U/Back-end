const mongoose = required('mongoose')

const investmentSchema = new mongoose.Schema({
	investorUser: {
		type: Number,
		required: true
	},
	amount: {
		type:  Number,
		required: true
	},
	description: {
		type: String,
		minlength:	5,
		maxlength: 200,
		required: true
	},
	createDate: {
		type: Date,
		required: true
	},
	updateDate: {
		type: Date,
		required: true
	}, 
	isActive: {
		type: Boolean, 
		required: true,
		default: true		
	}
})

module.exports = mongoose.model('Investment', investmentSchema)