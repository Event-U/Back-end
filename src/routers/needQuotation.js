const express = require('express')
const NeedQuotation = require('../usecases/needQuotaation')

const router = express.Router()

router.get('/', async(req,res) => {
	try{
		const allNeedQoutationFound = await NeedQuotation.getAll()
		res.json({
			success: true,
			message: 'All NeedQuotation',
			data: {
				NeedQuotation: allNeedQoutationFound
			}
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Somthen went wrong',
			error: error
		})
	}
})

router.get('/:id', async(req,res) => {
	try{
		const { id} = req.params
		const NeedQuotationFound = await NeedQuotation.getById(id)
		res.json({
			success: true,
			message: 'All NeedQuotation',
			data: {
				NeedQuotation: NeedQuotationFound
			}
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Somthen went wrong',
			error: error.message
		})
	}
})

router.post('/', async(req, res) => {
	try {
		const data = req.body
		const createNeedQoutation = await NeedQuotation(data)
		res.json({
			success: true,
			message: 'Created NeedQuotation',
			NeedQuotation: createNeedQoutation
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Something went wrong',
			error: error.message
		})
	}
})

router. patch('/:id', async (req, res) => {
	try{
		const { id } = req.params
		const body = req.body
		const NeedQuotationUpdate = await NeedQuotation.updateById(id, body)

		res.json({
			success: true,
			message: `NeedQuotation ${id} update`,
			data: {
				NeedQuotation: NeedQuotationUpdate
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
		const deleteNeedQuotation = await NeedQuotation.deleteById(id)
		res.json({
			succes: true,
			message: 'Deleted needQuotation',
			data: {
				NeedQuotation: deleteNeedQuotation
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

