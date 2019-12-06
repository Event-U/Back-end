const Address = require('../models/address')

function create({street, numberExt, numberInt, place, town, state, CP, isFiscal, isPhisical, users }) {
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
		users
	})
}

function getAll() {
	return Address.find()
}

function getById(id) {
	return Address.findById(id)
}

function updateById (id, newData) {
	return Address.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return Address.findByIdAndDelete(id)
}

module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}

