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
				catServices
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
		const catServicesFound = await catServices.getAll()
		res.json({
			succes: true,
			message: 'CatServices Found',
			data: {
				catServices: catServicesFound
			}
		})
	} catch (error) {
		res.json({
			succes: false,
			message: 'Something went wrong',
			error: error.message
		})
	}
})

router.delete('/id', async(req, res) => {
	try {
		const { id } = req.params
		const deleteCatServices = await catServcies.delete(id)
		res.jsson({
			succes: true,
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


router.post('/', async(req, res) => {
	try {
		const data = req.body
		const createCatServices = await catServcies.create(data)

		console.log(createCatServices)

		res.json({
			succes: true,
			message: 'Created CatServices',
			catServices: createCatServices
		})
	} catch (error) {
		res.json({
				succes: false,
				message: 'Something went wrong',
				error: error
		})
	}
 })

 module.exports = router