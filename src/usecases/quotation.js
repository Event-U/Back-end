const quotation = require('../models/quotation')

const quotationStates = require('../constants/quotations-states')

function create({ provider, price, description, image, need, status }) {
    return quotation.create({
        provider,
        price,
        description,
        image,
        need,
        status
    })
}

function getAll() {
    return quotation.find()
        .populate({
            path: 'need',
            populate: {
                path: 'event'
            }
        })
        .populate('provider')
}

function getById(id) {
    return quotation.findById(id)
        .populate({
            path: 'need',
            populate: {
                path: 'event'
            }
        })
        .populate('provider')
}

function getByProviderAndStatus(provider, status) {
    console.log('en getByProvider provider: ', provider, status)

    if (!provider) throw new Error('El proveedor es requerido')

    if (!status) throw new Error('El estado es requerido')

    /*
    return quotation.find({ provider, status })
    .populate({
    	path: 'need',
    	populate: {
    		path: 'event'
    	}
    })
    */
    console.log('llega con este proveerdor  ', provider, " status ", status)
    return quotation.find({ provider, status })



}

function updateById(id, newData) {
    return quotation.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
    return quotation.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    getByProviderAndStatus,
    updateById,
    deleteById
}