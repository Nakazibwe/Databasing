 const express = require('express');
 const router = express.Router();
 const staffController = require('../controllers/staff.controller');
 
 //Get all staff
 router.get('/staffs',staffController.getStaffs);
// Get one staff
 router.get('/staffs/:id',staffController.getStaff);
 //Adding a staff
 router.post('/staffs',staffController.postStaffs);
 //Updating a staff
 router.put('/staffs/:id',staffController.updateStaff);
 //Deleting a staff
 router.delete('/staffs/:id',staffController.deleteStaff);
 
 module.exports = router;