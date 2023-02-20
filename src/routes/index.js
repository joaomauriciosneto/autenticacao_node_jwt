const {Router} = require('express')
const UserController = require('../controllers/User')
const User = require('../controllers/User')
const { createMidUser } = require('../controllers/User/middlewares/middleware.user')

const routes = Router()

routes.post('/auth/register', createMidUser, UserController.createUser)

module.exports = routes