const Address = require('../models/address')

function create({street, numberExt, numberInt, place, town, state, CP, isFiscal, isPhisical, users, dateCreate, dateUpdate, isActive }) {
	return Address.create({
		street, 
		numberExt, 
		numberInt, 
		place, 
		town, 
		state, 
		CP, 
		isFiscal, 
		isPhisical, 
		users, 
		dateCreate, 
		dateUpdate, 
		isActive
	})
}

function getAll() {
	return Address.find()
}

function getById(id) {
	return Address.find(id)
}

function deleteById(id) {
	return Address.findByIdAndUpdate(id, { udateDate: now, isActive: false })
}

module.exports = {
	create,
	getAll,
	getById,
	deleteById
}

