const express = require('express')
const address = require('../usecases/address')
const router = express.Router()

router.get('/', async(req, res) => {
	try {
		const allAddress = await address.getAll()
		res.json({
			success: true,
			message: 'All address',
			data: {
				address: allAddress
			}
		})	
	} catch (error) {
		res.json({
			success: false,
			message: 'Something went wrong',
			error: error.message
		})
	}
})

router.get('/:id', async(req, res) => {
	try {
		const {id} = req.params
		const addressFound = await address.getById(id)
		res.json({
			success: true,
			message: `Address ${id} found`,
			data: {
			  address: addressFound
			}
		})
	}catch (error) {
		res.json({
			success: false,
			message: 'Error al encontrar address',
			error: error.message
		})
	}
})

router.post('/', async(req, res) => {
	try {
		const data = req.body
		const createAddress = await address.create(data)
		res.json({
			success: true,
			message: 'Created address',
			data: {
				address: createAddress
			}
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Something went wrong',
			error: error
		})
	}
})

router.patch('/:id', async (req, res) => {
	try{
		const { id } = req.params
		const data = req.body
		const AddressUpdate = await address.updateById(id, data)
		res.json ({
			success: true,
			message: `Address ${id} update`,
			data: {
				address: AddressUpdate
			}
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Something went wrong',
			error: error.message
		})
	} 
})

router.delete('/:id', async(req, res) => {
	try{
		const { id } = req.params
		const deleteAddress = await address.deleteById(id)
		res.json({
			success: true,
			message: 'Deleted address',
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Error al borrar Address',
			error: error.message
		})
	}
})

module.exports = router
