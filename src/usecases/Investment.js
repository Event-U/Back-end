const investment = require('../models/Investment')

function create ({investorUser, amout, description, createDate, updateDate, isActive }) {
	return Investment.create({
		investorUser,
		amout, 
		description, 
		createDate, 
		updateDate, 
		isActive 
	})
}

function getAll() {
	return Investment.find()
}

function getById(id) {
	return Investment.findById(id)
}

function deleteById(id) {
	return investment.findByIdAndDelete(id, { updateDate: now, isActive: false })
}

module.export = {
	create,
	getAll,
	getById,
	deleteById
}
