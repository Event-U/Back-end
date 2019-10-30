const catServices = require('../models/catServices')

function create({name, description, createDate, updateDate, isActive}) {
	name, 
	description, 
	createDate, 
	updateDate, 
	isActive
}

function getAll() {
	return catServices.find()
}

function getById(id) {
	return catServices.findById(id)
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