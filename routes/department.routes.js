const express = require('express')
const router = express.Router();
const departmentController = require('../controllers/department.controller');

//Get All Departments
router.get('/departments',departmentController.getDepartments);
//Get A Department.
router.get('/departments/:id',departmentController.getDepartment);
//Post Departments
router.post('/departments',departmentController.postDepartments);
//Update Department.
router.put('/departments/:id',departmentController.updateDepartment);
//Delete Department.
router.delete('/departments/:id',departmentController.deleteDepartment);

module.exports = router;