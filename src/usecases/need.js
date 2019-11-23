const Need = require('../models/need')

function create({description, date, service, event}) {
	return Need.create({
		description, 
		date,
		service, 
		event 
	})
}

function getAll() {
	return Need.find()
}

function getById(id) {
	return Need.findById(id)
}

/*
function getEvent(event) {
	const getEvent = Event.find({getEvent.event})
	const getQuotation = quotation.find({geetQuotation.idNeed})
	
	if(!getEvent) throw new Error('El evento no tiene necesidades')

	if(!getQuotation) throw new Error('Esta necesidad no tiene cotizaciones asignadas ')

	if (isAwarded === true) throw new Error('Cotizacion Adjudicad')

	return getEvent getQuotation
}

*/

function updateById (id, newData) {
	return Need.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return Need.findByIdAndUpdate(id, { updateDate: now, isActive: false })
}

module.exports = {
	create, 
	getAll,
	getById,
	updateById,
	deleteById
}