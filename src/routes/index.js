const {Router} = require('express')
const LoginController = require('../controllers/Login')
const { loginMidUser } = require('../controllers/Login/middlewares/middleware.login')
const UserController = require('../controllers/User')
const { createMidUser } = require('../controllers/User/middlewares/middleware.user')
const { checkToken } = require('../controllers/User/middlewares/middleware.validator')

const routes = Router()

routes.post('/auth/register', createMidUser, UserController.createUser)
routes.post('/auth/login', loginMidUser, LoginController.loginUser)
routes.get('/user/:user_id', checkToken, UserController.getUserAuth)

module.exports = routes