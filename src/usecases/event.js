const Event = require('../models/event')

function create ({eventDate, address, organizator, investment, createDate, updateDate }) {
	eventDate, 
	address, 
	organizator, 
	investment, 
	createDate, 
	updateDate
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