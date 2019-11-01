const express = require('express')
const investment = require('../usecases/investment')

const router = express.Router()

router.get('/', async(req, res) => {
	try {
		const allInvestment = await investment.getAll()
		res.json({
			success: true,
			message: 'All Investment',
			data: {
				investment: allInvestment
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
		const investmentFound = await investment.getById(id)
		res.json({
			success: true,
			message: 'Investment ${id} encontrado',
			data: {
			  investment: investmentFound
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
		const createInvestment = await investment.create(data)
		res.json({
			success: true,
			message: 'Created investment',
			data: {
				investment: createInvestment
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
		const investmentUpdate = await investment.updateById(id, body)
		Response.json ({
			success: true,
			message: 'investment ${id} update',
			data: {
				investment: investmentUpdate
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
		const deleteInvestment = await investment.findByIdAndUpdate(id, 
				{isActive: false, updateDate: Date.now()})
		res.json({
			success: true,
			message: 'Deleted investment',
			data: {
				investment: deleteInvestment
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

module.exports = router
