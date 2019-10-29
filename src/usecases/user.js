const User = require('../models/user')
const Service = require('../models/service')

function create({isOrganizer, isProvider, isStakeHolder, services, isActiveNotification, bussinessName, rfc, companyBussines, email, password, phone, createDate, updateDate}) {
	return User.create({ 
		isOrganizer,
    isProvider,
		isStakeHolder,
		idServices,
		isActiveNotification,
		idBussinessName,
		rfc,
		companyBussines,
		email,
		password,
		phone,
		createDate,
		updateDate
	})
}

function getAll() {
	return User.find()
}

function getById(id) {
	return User.findByID(id)
	.populate('service')
}

function getByIdAndServices(id) {
	return User.findByID(id)
	.populate('service')
}

function updateById (id, newData) {
	return User.findByIdAndUpdate(id, newData)
}

function getServices (id) {
	return services.findById()
}

function deleteById(id) {
	return User.findByIdAndUpdate(id, { updateDate: now, isActive: false })
}


module.exports = {
	create,
	getAll,
	getById,
	getByIdAndServices,
	deleteById,
	updateById
}