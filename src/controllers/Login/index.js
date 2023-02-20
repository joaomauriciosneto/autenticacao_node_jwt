const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const LoginController = {

    async loginUser(req, res) {

        const {email, password} = req.body

        try {

            const user = await User.findOne({
                email: email
            })

            if(!user) {
                return res.status(404).json({
                    msg: 'Usuário não cadastrado!'
                })
            }

            const checkPassword = await bcrypt.compare(password, user.password)

            if(!checkPassword) {
                return res.status(404).json({
                    msg: 'Senha inválida'
                })
            }

            const secret = process.env.SECRET

            const token = jwt.sign({
                id: user._id
            }, secret)

            return res.status(200).json({
                msg: 'Autenticação realizada com sucesso', token
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    }

}

module.exports = LoginController