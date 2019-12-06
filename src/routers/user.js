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
				user: allUsers
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

router.post('/login', async (req, res) => {
	try {
		const data = req.body
		console.log('post/login data:', data)
		const userData = await User.getLogin(data.email, data.password)
		res.json({
			success: true,
			message: 'Usuario Logeado',
			data: userData
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
		const {id} = req.params
		console.log('Id:', id)
		const UserFound = await User.getById(id)
		res.json({
			success: true,
			message: `User ${id} encontrado`,
			data: {
			  user: UserFound
			}
		})
	}catch (error) {
		res.json({
			success: false,
			message: 'Something went wrong qrty',
			error: error.message
		})
	}
})

router.patch('/:id', async (req, res) => {
	try{
		console.log('llega a patch')
		const { id } = req.params
		const body = req.body
		const UserUpdate = await User.updateById(id, body)
		
		res.json({
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
		const deleteUser = await User.deleteById(id)
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
