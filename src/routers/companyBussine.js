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
				companyBussine: allCompanyBussine
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
			message: `CompanyBussine ${id} found`,
			data: {
			  companyBussine: CompanyBussineFound
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

router.post('/', async (req, res) => {
  try {
		const data = req.body
    const newCompanyBussine = await CompanyBussine.create(data)

    res.json({
			success: true,
			message: `CompanyBussine ${id} Creada`,
      data: {
        companyBussine: newCompanyBussine
      }
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'Something went wrong Post',
      error: error.message
    })
  }
})



router.patch('/:id', async (req, res) => {
	try{

		const { id } = req.params
		const bbody = req.body
		const CompanyBussineUpdate = await CompanyBussine.updateById(id, body)

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
