const express = require('express')
const User = require('../usecases/user')

const router = express.Router()

router.get('/', async(req, res) => {
	try {
		const allUsers = await User.getAll()
		res.json({
			success: true,
			message: 'All Users',
			data: {
				Users: allUsers
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
		const UserFound = await User.getById(id)
		res.json({
			success: true,
			message: 'User ${id} encontrado',
			data: {
			  user: UserFound
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
		const createUser = await User.create(data)
		res.json({
			success: true,
			message: 'Created user',
			data: {
				user: createUser
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
		console.log('Entra al patch')

		const { id } = req.params
		const { body } = req.body
		const UserUpdate = await user.updateById(id, body)

		console.log (body)
		Response.json ({
			success: true,
			message: 'User ${id} update',
			data: {
				user: UserUpdate
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
		const deleteUser = await User.findByIdAndUpdate(id, 
				{isActive: false, updateDate: Date.now()})
		res.json({
			success: true,
			message: 'Deleted users',
			data: {
				user: deleteUser
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
