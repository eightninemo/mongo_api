const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new  Schema({
    title: {
        type: String
    },
    note: {
        type: String
    },
    type: {
        type: String
    },
    // phone: {
    //     type: String
    // },
    // age: {
    //     type: Number
    // },
    // avatar: {
    //     type: String
    // },
}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee