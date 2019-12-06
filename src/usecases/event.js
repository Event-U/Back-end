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
}

function getById(id) {
	return event.findById(id)
	.populate('need')
}

function getByOrganizator(organizator) {
	return event.findOne(organizator)
	.populate('need')
}

///// probar esto es postman y hacer asi las peticiones que requiera
function getByIds(id) {
	return event.findById(id)
	.pupulate({ 
		path: 'needs',
		populate:{
			path: 'quotes'
		}
	})
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