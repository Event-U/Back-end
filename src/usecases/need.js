const Need = require('../models/need')

function create({descripption, Services, userProvider, idEvent, createdate, updateDate, isActive }) {
	description, 
	Services, 
	userProvider, 
	Events, 
	createdate, 
	updateDate, 
	isActive
}

function getAll() {
	return Need.find()
}

function getById(id) {
	return Need.findById(id)
}

function deleteById(id) {
	return Need.FindByIdAndDelete(id, { updateDate: now, isActive: false })
}

module.exports={
	create, 
	getAll,
	getById,
	deleteById
}