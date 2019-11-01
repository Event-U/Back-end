const quotation = require('../models/quotation')

function create({provider, price, description, idNeed, idAwarded}) {
	return quotation.create({
		provider, 
		price,
		description, 
		idNeed,
		idAwarded 
	})
}

function getAll() {
	return quotation.find()
}

function getById(id) {
	return quotation.findById(id)
}

function updateById (id, newData) {
	return quotation.findByIdAndUpdate(id, newData)
}


module.exports = {
	create, 
	getAll,
	getById,
	updateById
}