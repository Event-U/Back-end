const express = require('express')
const column = require('../usecases/column')

const router = express.Router()

router.get('/', async(req, res) => {
	try{
		const allColumn = await column.getAll()
		res.json({
			success: true,
			message: 'All Column',
			data: {
				column: allColumn
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
		const columnFound = await column.getById(id)
		res.json({
			success: true,
			message: 'Column Found',
			data: {
				column: columnFound
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
		const createColumn = await column.create(data)
		res.json({
			success: true,
			message: 'Column creado',
			data: {
				column: createColumn
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

		const columnUpdate = await column.updateById(id, body)

		res.json ({
			success: true,
			message: `Column ${id} actualizado`,
			data: {
				column: columnUpdate
			}
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Error al actualizar column',
			error: error.message
		})
	} 
})


router.delete('/:id', async(req, res) => {
	try {
		const { id } = req.params
		const deleteColumn = await column.deleteById(id)
		res.json({
			success: true,
			message: 'column borrado',
			data: {
				column: deleteColumn
			}
		})
	} catch (error) {
		res.json({
			succes: false,
			message: 'Error al borrar columna',
			error: error.message
		})
	}
})

 module.exports = router