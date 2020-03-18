const Address = require('../models/address')

function create({ street, numberExt, numberInt, place, town, state, CP, isFiscal, isPhisical, users }) {
    return Address.create({
        street,
        numberExt,
        numberInt,
        place,
        town,
        state,
        CP,
        isFiscal,
        isPhisical,
        users
    })
}

function getAll() {
    return Address.find()
        .populate('users')
}

function getById(id) {
    return Address.findById(id)
        .populate('users')
}

function updateById(id, newData) {
    return Address.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
    return Address.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}