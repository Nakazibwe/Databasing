const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

//Get All Available Courses.
router.get('/courses',courseController.getCourses);
//Get One Course
router.get('/courses/:id',courseController.getCourse)
//Post Courses
router.post('/courses',courseController.postCourses);
//Update Course
router.put('/courses/:id',courseController.updateCourse);
//Delete Course
router.delete('/courses/:id',courseController.deleteCourse);

module.exports = router;
