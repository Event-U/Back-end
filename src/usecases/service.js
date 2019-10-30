const Service = require('../models/service')

function create({ name, description, measurementUnit, unitPrice, image,	catServices, createDate, updateDate, isActive}) {
	return Service.create({
		name,
		description, 
		measurementUnit,
		unitPrice,
		image,
		catServices,
		createDate,
		updateDate,
		isActive
	})
}

function getAll() {
	return Service.find()
}

function getById(id) {
	return Service.findById(id)
}

function updateById(id, newData ) {
	return Service.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return Service.findByIdAndUpdate(id, { updateDate: now, isActive: false })
}
	
module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}
