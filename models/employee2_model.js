const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employee2Schema = new  Schema({
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

const Employee2 = mongoose.model('Employee2', employee2Schema)
module.exports = Employee2