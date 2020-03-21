const board = require('../models/board')

function create({event, columns, service}) {
	return board.create({
		event, 
		columns,
		service
	})
}

function getAll() {
	return board.find()
	.populate('event')
	.populate('service')
	.populate({ 
		path: 'columns',
		populate:{
			path: 'tasks'
		}
	})
}

function getById(id) {
	return board.findById(id)
	.populate('event')
	.populate('service')
	.populate({ 
		path: 'columns',
		populate:{
			path: 'tasks'
		}
	})
}

function updateById (id, newData) {
	return board.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return board.findByIdAndDelete(id)
}

module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}