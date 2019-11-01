const express = require('express')
const quotation = require('../usecases/quotation')

const router = express.Router()


router.get('/', async(req, res) => {
	try{
		const allquotation = await quotation.getAll()
		res.json({
			success: true,
			message: 'All quotation',
			data: {
				quotation: allquotation
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

router.get('/:id', async(req, res) => {
	try {
		console.log(req.params)
		const { id } = req.params
		const quotationFound = await quotation.getById(id)
			res.json({
				success: true,
				message: 'quotation Found',
				data: {
					quotation: quotationFound
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

router.post('/', async(req, res) => {
	try {
		const data = req.body
		const createQuotation = await quotation.create(data)
		res.json({
			success: true,
			message: 'Created quotation',
			data: {
				quotation: createQuotation
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

router.patch('/:id', async (req, res) => {
	try{
		const { id } = req.params
		const body = req.body
		const quotationUpdate = await quotation.updateById(id, body)

		res.json ({
			success: true,
			message: `quotation ${id} update`,
			data: {
				quotation: quotationUpdate
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
		const deletequotation = await quotation.deleteById(id)
		res.json({
			succes: true,
			message: 'Deleted quotation',
			data: {
				quotation: deletequotation
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


module.exports = router
