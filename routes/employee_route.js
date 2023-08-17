const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/employee_controller')
const upload = require('../middleware/upload')
// const authenticate = require('../middleware/authenticate')

router.get('/all', EmployeeController.all)
router.get('/allpinned', EmployeeController.allpinned)
router.get('/show/:employeeId', EmployeeController.show)
router.post('/store', EmployeeController.store)
router.put('/update/:employeeId', EmployeeController.update)
router.delete('/remove/:employeeId', EmployeeController.destroy)

module.exports = router

