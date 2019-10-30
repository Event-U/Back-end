const express = require('express')
const CompanyBussine = require('../usecases/companyBussine')

const router = express.Router()

router.get('/', async(req, res) => {
	try {
		const allCompanyBussine = await CompanyBussine.getAll()
		res.json({
			success: true,
			message: 'All CompanyBussine',
			data: {
				CompanyBussine: allCompanyBussine
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
		const CompanyBussineFound = await CompanyBussine.getById(id)
		res.json({
			success: true,
			message: 'CompanyBussine ${id} found',
			data: {
			  CompanyBussine: CompanyBussineFound
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
		
		const deleteCompanyBussine = await CompanyBussine.findByIdAndUpdate(id, 
				{isActive: false, updateDate: Date.now()})
		res.json({
			success: true,
			message: 'Deleted CompanyBussine',
			data: {
				companyBussine: deleteCompanyBussine
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

router.post('/', async (request, response) => {
  try {

    const newCompanyBussine = await CompanyBussine.create(request.body)

    response.json({
			success: true,
			message: 'CompanyBussine ${id} Creada',
      data: {
        CompanyBussine: newCompanyBussine
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something went wrong Post',
      error: error.message
    })
  }
})



router.patch('/:id', async (req, res) => {
	try{
		console.log('Entra al patch')

		const { id } = req.params
		const { body } = req.body
		const CompanyBussineUpdate = await CompanyBussine.updateById(id, body)

		console.log (body)
		Response.json ({
			success: true,
			message: 'CompanyBussine update',
			data: {
				CompanyBussine: CompanyBussineUpdate
			}
		})
	} catch (error) {
		res.json({
			success: false,
			message: 'Something went wrong en patch',
			error: error.message
		})
	} 
})


module.exports = router
