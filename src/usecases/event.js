const event = require('../models/event')

function create({name, description, date, addresses, image, organizator, investments, needs}) {
	console.log('create')
	return event.create({
		name,
		description,
		date, 
		addresses, 
		image,
		organizator, 
		investments,
		needs
	})
}

function getAll() {
	return event.find()
	.populate({ 
		path: 'needs',
		populate:{
			path: 'quotation'
		}
	})
}

function getById(id) {
	console.log('debe traer el evento con necesidades y cotizaciones')
	return event.findById(id)
	.populate({ 
		path: 'needs',
		populate:{
			path: 'quotation'
		}
	})
}

function getByOrganizator(organizator) {
	console.log('Usecase getByOrganizator ', organizator)
	return event.find ({ organizator })
	.populate('Need')
}

function updateById(id, newData) {
	return event.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return event.findByIdAndDelete(id)
}

module.exports = {
	create,
	getAll,
	getById,
	getByOrganizator,
	updateById,
	deleteById
}