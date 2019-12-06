const NeedQuotaion = require('../models/needQuotation')

async function create({need, quotation}) {
	return NeedQuotaion.create({
		need,
		quotation
	})
}

function getAll() {
	return NeedQuotaion.find()
}

function getById(id) {
	return NeedQuotaion.findById(id)
}

function updateById(id) {
	return  NeedQuotatition.findByIdAndUpdate(id, { updateDate: now, isActive: false })
}

function deleteById(id) {
	return NeedQuotaion.findByIdAndDelete(id)
}

module.exports = {
	create, 
	getAll,
	getById,
	updateById,
	deleteById
}