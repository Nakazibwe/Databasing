const {sequelize,course} = require ('../models');
//Getting all courses.
exports.getCourses = async(req,res) =>{
try {
    const availableCourses = await course.findAll();
    if(!availableCourses){ throw 'No Courses Available currently '}
    res.status(200).json(availableCourses);
} catch (error) {
    if(error == 'No Courses Available currently '){
        return res.status(404).json({ error });
    }
    return res.status(400).json({ error });

}
}

//Getting one course.
exports.getCourse = async(req,res)=>{
const {id} = req.params;
try {
    const selectedCourse = await course.findOne({where:{id:id}});
    if(!selectedCourse){ throw 'Selected course is unavailable';}
    res.status(200).json(selectedCourse);
} catch (error) {
    if(error == 'Selected course is unavailable'){
        return res.status(404).json({ error });
    }
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
    if(error == 'New Course was not created'){
        return res.status(409).json({ error });
    }
    return res.status(400).json({ error });
}
}
// Updating a Course.
exports.updateCourse = async (req,res)=>{
const {id} = req.params;
const {course_name} = req.body; 
try {
    const selectedUpdate = await course.findOne({where:{id:id}});
    if(!selectedUpdate) {throw 'Selected course for updating is unavailable'};
    selectedUpdate.course_name = course_name;
    await selectedUpdate.save();
    res.status(201).json(selectedUpdate);

} catch (error) {
    if(error == 'Selected course for updating is unavailable'){
        return res.status(404).json({ error });
    }
    return res.status(400).json({ error });

}
}

//Deleting a Course.
exports.deleteCourse = async(req,res)=>{
const {id} = req.params;
try {
    const selectedDeletion = await course.findOne({where:{id:id}});
    if(!selectedDeletion){
        throw 'Selected course for deleting is unavailable';
    }
    await selectedDeletion.destroy();
    res.status(200).json('Course was successfully deleted');
} catch (error) {
    if(error == 'Selected course for deleting is unavailable'){
        return res.status(404).json({ error });
    }
    return res.status(400).json({ error });
    
}
}

