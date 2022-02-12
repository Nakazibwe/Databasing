const {sequelize,course} = require ('../models');
//Getting all courses.
exports.getCourses = async(req,res) =>{
try {
    const availableCourses = await course.findAll();
    if(!availableCourses){ throw 'No Courses Available '}
    res.json(availableCourses);
} catch (error) {
    return res.status(400).json({ error });
}
}
//Posting courses. 
exports.postCourses = async (req,res)=>{
const {course_name} = req.body;
try {
    const newCourse = await course.create({course_name});
    if(!newCourse){throw 'New Course was not created'}
    res.status(201).json(newCourse);
} catch (error) {
    return res.status(400).json({ error });
}
}