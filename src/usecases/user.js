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
	.populate('service')
	.populate('companyBussines')
}

function getLogin(email, password) {
	const validateEmail = User.findOne({email})
	if(!validateEmail) throw new Error('Invalid Data')

	if (password !== validateEmail.password) throw new Error('Invalid Data')

	return validateEmail
}


function getByIdAndServices(id) {
	return User.findById(id)
	.populate('service')
}

function updateById (id, newData) {

	return User.findByIdAndUpdate(id, newData)
}


function deleteById(id) {
	return User.findByIdAndUpdate(id, { updateDate: Date.now(), isActive: false })
}


module.exports = {
	create,
	getAll,
	getById,
	getLogin,
	getByIdAndServices,
	deleteById,
	updateById
}