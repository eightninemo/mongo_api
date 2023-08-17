const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

const EmployeeRoute = require('./routes/employee_route')
const AuthRoute = require('./routes/auth_route')

// change connection string
mongoose.connect('mongodb+srv://sooreoluwa:sooredatabase@cluster0.epsmb5x.mongodb.net/?retryWrites=true&w=majority', 
{   
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', (error) => {
    console.log(error)
})

db.on('connected', () => {
    console.log('Databases connection established.')
})


 
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
})

app.use('/api/employee', EmployeeRoute)
app.use('/api', AuthRoute)
