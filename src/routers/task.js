const express = require('express')
const task = require('../usecases/task')

const router = express.Router()

router.get('/', async(req, res) => {
	try{
		const allTask = await task.getAll()
		res.json({
			success: true,
			message: 'All Task',
			data: {
				task: allTask
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
	try{
		const { id } = req.params
		console.log('llega aqui')
		const taskFound = await task.getById(id)
		res.json({
			success: true,
			message: 'Task Found',
			data: {
				task: taskFound
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
		console.log(data)
		const createTask = await task.create(data)
		res.json({
			success: true,
			message: 'Task creado',
			data: {
				task: createTask
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
		const { id } = req.params
		const body = req.body

		const taskUpdate = await task.updateById(id, body)

		res.json ({
			success: true,
			message: `Task ${id} actualizado`,
			data: {
				task: taskUpdate
			}
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Error al actualizar category',
			error: error.message
		})
	} 
})


router.delete('/:id', async(req, res) => {
	try {
		const { id } = req.params
		const deleteTask = await task.deleteById(id)
		res.json({
			success: true,
			message: 'Task borrado',
			data: {
				task: deleteTask
			}
		})
	} catch (error) {
		res.json({
			succes: false,
			message: 'Error al borrar task',
			error: error.message
		})
	}
})

 module.exports = router