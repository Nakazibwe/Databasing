 const express = require('express');
 const router = express.Router();
 const staffController = require('../controllers/staff.controller');

 router.get('/staffs',staffController.getStaffs);
 router.post('/staffs',staffController.postStaffs);
 module.exports = router;