const Event = require('../models/event')

function create ({date, addresses, organizator, investment, image, isPay, name, description, createDate, updateDate, isActive }) {
	date, 
	addresses, 
	organizator, 
	investments, 
	image,
	isPay,
	name,
	description,
	createDate, 
	updateDate,
	isActive
}

function getAll() {
	return Event.find()
}

function getById(id) {
	return Event.find(id)
}

function deleteById(id) {
	return Event.findByIdDelete(id, { updateDate: now, isActive: false })
}

module.export = {
	create,
	getAll,
	getById,
	deleteById
}