const express = require('express')
const Service = require('../usecases/service')
const router = express.Router()
 
router.get('/', async(req, res) => {
	try {
		const allServices = await Service.getAll()
		res.json({
			success: true,
			message: 'All Services',
			data: {
				Service: allServices
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

router.get('/:id', async(req, res) => {
	try {
		const { id } = req.params
		const ServiceFound = await Service.getById()
			res.json({
			success: true,
			message: 'Service found',
			data: {
				Service: ServiceFound
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
		const deleteService = await Service.deleteUser(id)
		res.json({
			success: true,
			message: 'Deleted service',
			data: {
				Service: deleteService
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

router.post('/', async(req, res) => {
	try {
		const data = req.body
		const createService = await Service.create(data)

		console.log(createService)

		res.json({
			success: true,
			message: 'Created service',
			service: createService
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Something went wrong',
			error: error
		})
	}
})

module.exports = router
