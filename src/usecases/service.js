const Service = require('../models/service')

function create({ name, description, measurementUnit, unitPrice, image,	category }) {
	return Service.create({
		name,
		description, 
		measurementUnit,
		unitPrice,
		image,
		category
	})
}

function getAll() {
	return Service.find()
}

function getById(id) {
	return Service.findById(id)
}

async function getByNameCategory(category) {
	category = category.toLowerCase()
	console.log('getByNameCategory, valor a buscar: ', category)

	const services = await Service.find().populate('category')
	 
	const serviceFilter = services.filter(service => {
		return service.category.name.toLowerCase().includes(category)
	})

	if(!serviceFilter.length) throw new Error('No se encontro la categoria de este servicio')
console.log(serviceFilter)
	return serviceFilter
}

function updateById(id, newData ) {
	return Service.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return Service.findByIdAndDelete(id)
}
	
module.exports = {
	create,
	getAll,
	getById,
	getByNameCategory,
	updateById,
	deleteById
}
