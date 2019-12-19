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

router.get('/category/:category', async(req, res) => {
	try {
		const {category} = req.params
		console.log('llega a get/category', category)
		const byCategory = await Service.getByNameCategory(category)
			res.json({
			success: true,
			message: `Services found`,
			data: {
				service: byCategory
			}
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Error al traer los servicios por categorias',
			error: error.message
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
    console.log('llega con id: ', id)
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
		const deleteService = await Service.deleteById(id)
	
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
