const CompanyBussine = require('../models/companyBussine')

function create({name, createDate, updateDate, isActive}) {
	console.log(name)
	return CompanyBussine.create({
		name, 
		createDate, 
		updateDate, 
		isActive
	})
}

function getAll() {
	return CompanyBussine.find()
}

function getById(id) {
	return CompanyBussine.findById(id)
}

function updateById (id, newData) {
	return CompanyBussine.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return CompanyBussine.findByIdAndUpdate(id, { udateDate: now, isActive: false })
}

module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}
