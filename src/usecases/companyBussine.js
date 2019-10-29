const CompanyBussine = require('../models/companyBussine')

function create({name, createDate, createUpdate, isActive}) {
	return CompanyBussine.create({
		name, 
		createDate, 
		createUpdate, 
		isActive
	})
}

function getAll() {
	return CompanyBussine.find()
}

function getById(id) {
	return CompanyBussine.find(id)
}

function deleteById(id) {
	return CompanyBussine.findByAndDelete(id, { updateDate: now, isActive: false })
}

module.exports = {
	create,
	getAll,
	getById,
	deleteById
}
