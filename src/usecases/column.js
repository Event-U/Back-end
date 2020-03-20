const column = require('../models/column')

function create({name, tasks}) {
	console.log('entro al create de column')

	return column.create({
		name, 
		tasks
	})
}

function getAll() {
	return column.find()
}

function getById(id) {
	return column.findById(id)
}

function updateById (id, newData) {
	return column.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return column.findByIdAndDelete(id)
}

module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}