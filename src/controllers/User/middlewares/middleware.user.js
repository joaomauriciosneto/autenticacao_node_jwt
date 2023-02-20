const UserMiddlewares = {

    createMidUser(req, res, next) {
        
        const {name, email, password, confirmPassword} = req.body

        if(!name) {
            return res.status(422).json({
                msg: 'Nome é obrigatório'
            })
        }

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

        if(password !== confirmPassword) {
            return res.status(422).json({
                msg: 'As senhas estão diferentes'
            })
        }

        next()

    }

}

module.exports = UserMiddlewares