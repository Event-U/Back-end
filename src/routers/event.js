const express = require('express')
const event = require('../usecases/event')

const router = express.Router()

router.get('/', async(req, res) => {
	try {
		const allEvents = await event.getAll()
		res.json({
			success: true,
			message: 'All events',
			data: {
				events: allEvents
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
		const { id } = req.params
		const eventFound = await event.getById
		res.json({
			success: true,
			message: 'event found',
			data: {
			  event: eventFound
			}
		})
	}catch (error) {
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
		const deleteEvent = await event.findByIdAndUpdaate(id, 
				{isActive: false, updateDate: Date.now()})
		res.json({
			success: true,
			message: 'Deleted event',
			data: {
				event: deletEevent
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
		const createEvent = await event.create(data)
		res.json({
			success: true,
			message: 'Created event',
			data: {
				event: createEvent
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

module.exports = router
