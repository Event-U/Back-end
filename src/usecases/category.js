const category = require('../models/category')

function create({name, description}) {
	return category.create({
		name, 
		description 
	})
}

function getAll() {
	return category.find()
}

function getById(id) {
	return category.findById(id)
}

function getByIdAndServices(id) {
	return category.findById(id)
	.populate('services')
}


function updateById (id, newData) {
	return category.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return category.findByIdAndDelete(id)
}

module.exports = {
	create,
	getAll,
	getById,
	getByIdAndServices,
	updateById,
	deleteById
}