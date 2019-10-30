const User = require('../models/user')

function create({isOrganizator, isProvider, isStakeHolder, services, isActiveNotification, bussinesName, rfc, companyBussines, email, password, phone, createDate, updateDate}) {
	return User.create({ 
		isOrganizator,
    isProvider,
		isStakeHolder,
		services,
		isActiveNotification,
		bussinesName,
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
	return User.findById(id)
//	.populate('service')
//	.populate('companyBussines')
}

function getByIdAndServices(id) {
	return User.findById(id)
	.populate('service')
}

function updateById (id, newData) {
	return User.findByIdAndUpdate(id, newData)
}

function getServices (id) {
	return services.findById(id)
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