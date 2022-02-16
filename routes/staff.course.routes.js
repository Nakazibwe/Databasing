const express = require('express');
const router = express.Router();
const staffCourseController = require('../controllers/staff.course.controllers');

//Getting all staff-courses.
router.get('/staffcourses',staffCourseController.getStaffCourses);
//Getting courses for specific staff.
router.get('/staffcourses/:staffid',staffCourseController.getStaffCourse);
//Posting staffCourses
router.post('/staffcourses',staffCourseController.postStaffCourses);
//Deleting Staff & their Courses
router.delete('/staffcourses/:staffid',staffCourseController.deleteStaffCourse);
//Updating Staff-Courses.
router.put('/staffcourses/:staffid',staffCourseController.updateStaffCourse);

module.exports = router;