const Need = require('../models/need')

function create({description, date, service, event}) {
	return Need.create({
		description, 
		date,
		service, 
		event 
	})
}

function getAll() {
	return Need.find()
}

function getById(id) {
	return Need.findById(id)
}

function updateById (id, newData) {
	return Need.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return Need.findByIdAndUpdate(id, { updateDate: now, isActive: false })
}

module.exports = {
	create, 
	getAll,
	getById,
	updateById,
	deleteById
}