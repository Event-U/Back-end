const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')
const User = require('../models/user')

async function create({isOrganizator, isProvider, isStakeHolder, services, isActiveNotification, bussinesName, rfc, companyBussines, email, password, phone, createDate, updateDate}) {
	const hash = await bcrypt.hash(password)
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
		password: hash,
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

async function getLogin(email, password) {
	console.log('email:', email)
	console.log('password:', password)
	const userFound = await User.findOne({email})
	if(!userFound) throw new Error('No se encontro un usuario con este email')

	const validPassword = await bcrypt.compare(password, userFound.password)
	if (!validPassword) throw new Error('Password incorrecto')

	return jwt.sign({id: userFound._id})
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