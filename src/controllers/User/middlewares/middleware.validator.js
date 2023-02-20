const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserValidator = {

    checkToken(req, res, next) {

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if(!token) {
            return res.status(401).json({
                msg: 'Acesso negado!'
            })
        }

        try {

            const secret = process.env.SECRET

            jwt.verify(token, secret)

            next()
            
        } catch (error) {
            return res.status(500).json(error)
        }

    }

}

module.exports = UserValidator