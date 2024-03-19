const express = require('express');
const router = express.Router()

const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('../controlles/queries')

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id', getUserById)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router