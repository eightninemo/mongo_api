const User = require('../models/user_model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res, next) => {
bcrypt.hash(req.body.password, 10, function(err, hashedPass){
    if(err){
        res.json({
            error: err
        })
    }
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPass
    })
    user.save()
    .then(response => {
        res.json({
            message: 'User Added Successfully',
            data: response
        })
    }).catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
})   
}

const login = (req, res, next) => {
    var email = req.body.email
    var password = req.body.password

    User.findOne({$or: [{email:email}, {phone:email}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                   let token = jwt.sign({name: user.name},'zxcvbnm',{expiresIn: '1h'})
                   res.status(200).json({
                    message: 'Login Successful',
                    token: token
                   })
                }else{
                    res.status(200).json({
                        message: 'Invalid Password',
                        
                    })
                }
            })
        }
    })
}


module.exports = {
   register, login
}