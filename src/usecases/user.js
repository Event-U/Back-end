const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')
const User = require('../models/user')

async function create({typeUser, services, isActiveNotification, bussinesName, rfc, email, password, phone, address}) {
	const hash = await bcrypt.hash(password)
	return User.create({ 
		typeUser,
  	services,
		isActiveNotification,
		bussinesName,
		rfc,
		email,
		password: hash,
		phone, 
		address
	})
}

function getAll() {
	return User.find().select({password: false})
}

function getById(id) {
	return User.findById(id)
	.populate('services')
}

async function getLogin(email, password) {
	console.log('llega por getLogin con ')
	const userFound = await User.findOne({email})
	if(!userFound) throw new Error('No se encontro un usuario con este email')

	const validPassword = await bcrypt.compare(password, userFound.password)
	if (!validPassword) throw new Error('Password incorrecto')

	return {
		usuario: userFound, 
		token: jwt.sign({id: userFound._id})
	}
}

function getByIdAndServices(id) {
	return User.findById(id)
	.populate('services')
}

function updateById (id, newData) {
	return User.findOneAndUpdate(id, newData)

}

function deleteById(id) {
	return User.findByIdAndDelete (id)
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