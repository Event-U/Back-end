const express = require('express')
const catServcies = require('../usecases/catServices')

const router = express.Router()

router.get('/', async(req, res) => {
	try{
		const allCatServices = await catServices.getAll()
		res.json({
			succes: true,
			message: 'All catServices',
			data: {
				catServices: allCatService
			}
		})
	} catch (error) {
		res.json({
			succes: false,
			message: 'Something went wrong',
			error: error
		})
	}
})

router.get('/:id', async(req, res) => {
	try{
		const { id } = req.params
		const catServicesFound = await catServices.getById(id)
		res.json({
			success: true,
			message: 'CatServices Found',
			data: {
				catServices: catServicesFound
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
		const createCatService = await catService.create(data)
		res.json({
			success: true,
			message: 'Created catService',
			data: {
				catService: createCatService
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
		const { body } = req.body
		const catServiceUpdate = await catService.updateById(id, body)

		Response.json ({
			success: true,
			message: 'CatService ${id} update',
			data: {
				catService: catServiceUpdate
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


router.delete('/id', async(req, res) => {
	try {
		const { id } = req.params
		const deleteCatServices = await catServcies.delete(id)
		res.json({
			success: true,
			message: 'Delete catServices',
			data: {
				catServices: deleteCatServices
			}
		})
	} catch (error) {
		res.json({
			succes: false,
			message: 'Something went wrong catServices',
			error: error.message
		})
	}
})

 module.exports = router