const event = require('../models/event')

function create({name, description, date, addresses, image, organizator, investments, isPay, createDate, updateDate, isActive }) {
	console.log('create')
	return event.create({
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
	})
}

function getAll() {
	return event.find()
}

function getById(id) {
	return event.findById(id)
}

function updateById(id, newData) {
	return event.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return event.findByIdDelete(id, { updateDate: now, isActive: false })
}

module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}