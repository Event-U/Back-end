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
				event: allEvents
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

router.get('/byOrganizator/', async(req, res) => {
	try {
		const {organizator} = req.body
		const eventsFound = await event.getByOrganizator(organizator)
		res.json({
			success: true,
			message: 'Eventos por organizador',
			data: {
			  event: eventsFound
			}
		})
	}catch (error) {
		res.json({
			success: false,
			message: 'Problemas al recuperar los eventos por organizador',
			error: error.message
		})
	}
})

router.get('/:id', async(req, res) => {
	try {
		const { id } = req.params
		console.log('llego por id ', id)
		const eventFound = await event.getById(id)
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
			error: error.message
		})
	}
})

router.patch('/:id', async (req, res) => {
	try{
		console.log('llego a patch')
		const { id } = req.params
		const body = req.body
		console.log(body)
		const eventUpdate = await event.updateById(id, body)

		res.json ({
			success: true,
			message: 'Event ${id} update',
			data: {
				event: eventUpdate
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
		const deleteEvent = await event.deleteById(id)
		res.json({
			success: true,
			message: 'Deleted event',
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
