const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

router.get('/courses',courseController.getCourses);
router.post('/courses',courseController.postCourses);
module.exports = router;
