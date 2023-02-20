const LoginMiddlewares = {

    loginMidUser(req, res, next) {
        
        const {email, password} = req.body

        if(!email) {
            return res.status(422).json({
                msg: 'Email é obrigatório'
            })
        }

        if(!password) {
            return res.status(422).json({
                msg: 'Password é obrigatório'
            })
        }

        next()

    }

}

module.exports = LoginMiddlewares