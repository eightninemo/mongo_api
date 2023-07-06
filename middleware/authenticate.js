const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('')[1]
        const decode = jwt.verify(token, 'zxcvbnm')
        req.user = decode
        next()
    } catch(e){
        console.log(e)
        res.json({
            message: 'Authentication Failed!'
        })
    }
}

module.exports = authenticate