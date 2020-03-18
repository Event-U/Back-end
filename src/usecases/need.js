const Need = require('../models/need')

function create({ description, service, quotation, isAwared }) {
    return Need.create({
        description,
        service,
        quotation,
        isAwared
    })
}

function getAll() {
    return Need.find()
        .populate('service')
}

function getById(id) {
    return Need.findById(id)
        .populate('service')
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

function updateById(id, newData) {
    return Need.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
    return Need.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}