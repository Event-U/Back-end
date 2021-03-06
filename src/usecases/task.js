
const task = require('../models/task')

function create({name, description, quotation}) {
	return task.create({
		name, 
		description,
		quotation
	})
}

function getAll() {
	return task.find()
}

function getById(id) {
	return task.findById(id)
}

function updateById (id, newData) {
	return task.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return task.findByIdAndDelete(id)
}

module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}