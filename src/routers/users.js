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
		const { id } = req.params
		const UserFound = await User.getById
		res.json({
			success: true,
			message: 'User found',
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

router.delete('/:id', async(req, res) => {
	try{
		const { id } = req.params
		const deleteUser = await User.findByIdAndUpdaate(id, 
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

module.exports = router
