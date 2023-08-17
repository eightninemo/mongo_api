const Employee = require('../models/employee_model')

// show list of employees
const all = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            status: true,
            data: response
        })
    }).catch(error => {
        res.json({
            status: false,
            message: 'An error occured'
        })
    })
}

// show employee by ID
const show = (req, res, next) => {
    const employeeId = req.params.employeeId
    Employee.findById(employeeId)
    .then(response => {
        res.json({
            data: response
        })
    }).catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

// add employee to database
const store = (req, res, next) => {
    let employee = Employee({
        title: req.body.title,
        note: req.body.note,
        type: req.body.type,
    }) 
    console.log(employee)
 
    employee.save()
    .then(response => {
        res.json({
            status: true,
            message: 'Note Added Successfully',
            data: response
        })
    }).catch(error => {
        console.log(error)
        res.json({
            status: false,
            message: error
        })
    })
}

// update employee by ID
const update = (req, res, next) => {
    const employeeId = req.params.employeeId
    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeId, {$set: updatedData})
    .then(response => {
        res.json({
            message: 'employee updated successfully'
        })
    }).catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

// update employee by ID
const destroy = (req, res, next) => {
    const employeeId = req.params.employeeId
    Employee.findByIdAndRemove(employeeId)
    .then(response => {
        res.json({
            message: 'employee deleted successfully'
        })
    }).catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports = {
        all, show, store, update, destroy
}