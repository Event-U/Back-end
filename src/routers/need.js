const express = require('express')
const Need = require('../usecases/need')

const router = express.Router()


router.get('/', async(req, res) => {
	try{
		const allNeed = await Need.getAll()
		res.json({
			succes: true,
			message: 'All Need',
			data: {
				Need: allNeed
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
	try {
		const { id } = req.params
		const NeedFound = await Need.getById()
			res.jason({
				succes: true,
				message: 'Need Found',
				data: {
					Need: NeedFound
				}
			})
	}	catch (error) {
		res.json({
			succes: false,
			message: 'Something went wrong',
			error: error.message
		})
	}
})

router.delete('/:id', async(req, res) => {
	try{
		const { id } = req.params
		const deleteNeed = await Need.delete(id)
		res.json({
			succes: true,
			message: 'Deleted need',
			data: {
				Need: deleteNeed
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

router.post('/', async(req, res) => {
	try {
		const data = req.body
		const createNeed = await Need.create(data)

		console.log(createNeed)

		res.json({
			succes: true,
			message: 'Created Need',
			Need: createNeed
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
