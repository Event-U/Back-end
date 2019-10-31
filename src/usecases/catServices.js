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

function updateById (id, newData) {
	return catServices.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return catServices.FindByIdAndDelete(id, { updateDate: now, isActive: false })
}

module.exports={
	create,
	getAll,
	getById,
	updateById,
	deleteById
}