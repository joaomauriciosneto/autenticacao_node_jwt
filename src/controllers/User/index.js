const User = require('../../models/User')
const bcrypt = require('bcrypt')

const UserController = {

    async createUser(req, res) {

        const {name, email, password, confirmPassword} = req.body

        try {

            const userExist = await User.findOne({
                email: email
            })         

            if(userExist) {
                return res.status(400).json({
                    msg: 'Usuário já cadastrado!'
                })
            }

            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)

            const user = new User({
                name,
                email,
                password: passwordHash
            })

            await user.save()

            return res.status(201).json({
                msg: 'Usuário criado com sucesso!',
                data: user
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    }

}

module.exports = UserController