const express = require('express')
const router = express.Router();
const departmentController = require('../controllers/department.controller')
router.get('/departments',departmentController.getDepartment);
router.post('/departments',departmentController.postDepartment);
module.exports = router;