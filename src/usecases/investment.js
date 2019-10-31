const investment = require('../models/Investment')

function create ({investorUser, amout, description, createDate, updateDate, isActive }) {
	return investment.create({
		investorUser,
		amout, 
		description, 
		createDate, 
		updateDate, 
		isActive 
	})
}

function getAll() {
	return investment.find()
}

function getById(id) {
	return investment.findById(id)
}

function updateById(id, newData) {
	return investment.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
	return investment.findByIdAndUpdate(id, { updateDate: now, isActive: false })
}

module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
}
