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

router.get('/:id', async(req, res) => {
	try {
		const {id} = req.params
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
			message: 'Something went wrong',
			error: error.message
		})
	}
})

router.get('/', async(req, res) => {
	try {
		const {email, password} = req.body
		const emailFound = await User.getLogin(email, password)

		res.json({
			success: true,
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
		// console.log(req.params)
		// console.log(req.body)
	
		const { id } = req.params
		const body = req.body
		console.log (body)
		const UserUpdate = await User.updateById(id, body)
		console.log('llego')
		
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
