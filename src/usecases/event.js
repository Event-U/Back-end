const Event = require('../models/event')

function create ({name, description, date, addresses, image, organizator, investments, isPay, createDate, updateDate, isActive }) {
	name,
	description,
	date, 
	addresses, 
	image,
	organizator, 
	investments, 
	isPay,
	createDate, 
	updateDate,
	isActive
}

function getAll() {
	return Event.find()
}

function getById(id) {
	return Event.findById|(id)
}

function updateById (id, newData) {
	return Event.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return Event.findByIdDelete(id, { updateDate: now, isActive: false })
}

module.export = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}