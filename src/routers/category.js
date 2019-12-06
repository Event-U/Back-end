const express = require('express')
const category = require('../usecases/category')

const router = express.Router()

router.get('/', async(req, res) => {
	try{
		const allCategory = await category.getAll()
		res.json({
			success: true,
			message: 'All category',
			data: {
				category: allCategory
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
		const categoryFound = await category.getByIdAndServices(id)
		res.json({
			success: true,
			message: 'category Found',
			data: {
				category: categoryFound
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
		const createCategory = await category.create(data)
		res.json({
			success: true,
			message: 'Categoria creada',
			data: {
				category: createCategory
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

		const categoryUpdate = await category.updateById(id, body)

		res.json ({
			success: true,
			message: `Categoria ${id} actualizada`,
			data: {
				category: categoryUpdate
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
		const deleteCategory = await category.deleteById(id)
		res.json({
			success: true,
			message: 'Categoria borrada',
			data: {
				category: deleteCategory
			}
		})
	} catch (error) {
		res.json({
			succes: false,
			message: 'Error al borrar category',
			error: error.message
		})
	}
})

 module.exports = router