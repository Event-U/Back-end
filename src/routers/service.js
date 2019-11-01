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
				service: allServices
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
		const {id} = req.params
		const ServiceFound = await Service.getById(id)
			res.json({
			success: true,
			message: `Service ${id} found`,
			data: {
				service: ServiceFound
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

router.patch('/:id', async (req, res) => {
	try{
		const { id } = req.params
		const body = req.body
		const serviceUpdate = await Service.updateById(id, body)

		res.json ({
			success: true,
			message: `Service ${id} update`,
			data: {
				service: serviceUpdate
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
		const deleteService = await Service.findByIdAndUpdate(id,
			{isActive: false, updateDate: Date.now()})

		res.json({
			success: true,
			message: 'Deleted service',
			data: {
				service: deleteService
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


module.exports = router
