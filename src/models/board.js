// model board
const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
	event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'event'
  },
  
	columns: {
		type: [{
	    type: mongoose.Schema.Types.ObjectId,
      ref: 'column'
		}]
	},

	service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'service'
  }
})

module.exports = mongoose.model('board', boardSchema)