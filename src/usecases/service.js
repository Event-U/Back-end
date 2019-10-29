const Service = require('../models/service')

function create({ name, description, measurementUnit, unitPrice, createDate, UpdateDate, isActive }) {
	return Service.create({
		name,
		description, 
		measurementUnit,
		unitPrice,
		imagenes, 
		createDate, 
		UpdateDate, 
		isActive,
		id	
	})
}

function getAll() {
	return Service.find()
}

function getById(id) {
	return Service.findId(id)
}

function deleteById (id) {
	return Service.findByIdAndUpdate(id, { updateDate: now, isActive: false })
}
	

function updateById (id, newData ) {
	return Service.findByIdAndUpdate(id, newData)
}

module.exports = {
	create,
	getAll,
	getById,
	deleteById
}
