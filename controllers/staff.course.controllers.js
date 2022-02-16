const res = require('express/lib/response');
const { json } = require('express/lib/response');
const {sequelize,staffCourse,staff,course} = require ('../models');
//Getting all staff and their courses.
exports.getStaffCourses = async(req,res)=>{
try {
    const availableStaffCourses = await staffCourse.findAll();
    if(!availableStaffCourses){
      throw 'No available staff with corresponding courses'
    }
    res.status(200).json(availableStaffCourses);
} catch (error) {
    if(error == 'No available staff with corresponding courses'){
        return res.status(404).json({ error });  
    }
    return res.status(400).json({ error });

}
}
//Getting the courses of one staff
exports.getStaffCourse = async(req,res)=>{
const{staffid} = req.params;
try {
    const selectedFacilitator = await staffCourse.findAll({where:{staffId:staffid}});
    if(!selectedFacilitator){
        throw 'Selected Facilitator is unavailable';
    }
    res.status(200).json({"A Staff's Courses": selectedFacilitator});
} catch (error) {
    if(error == 'Selected Facilitator is unavailable'){
        return res.status(404).json({ error });
    }
  return res.status(400).json({ error }); 


}
}
//Posting staff-courses
exports.postStaffCourses = async (req,res)=>{
const {staffId,courseId} = req.body;
try {
    const facilitator = await staff.findOne({where:{id:staffId}});
    const facilitationCourse = await course.findOne({where:{id:courseId}});
    const existingfacilitation = await staffCourse.findOne({where:{staffId:staffId,courseId:courseId}});
    if(!facilitator){throw 'Selected staff is unavailable, enter correct staffID';}
    else if(!facilitationCourse){throw 'Selected course is unavailable,enter correct courseID';}
    else if(existingfacilitation){throw 'Selected course already exists for selected  staff'}
    const newFacilitation = await staffCourse.create({staffId,courseId});
    if(!newFacilitation){throw 'Creation of Staff-Course failed'}
    res.status(201).json(newFacilitation);
} catch (error) {
    if(error == 'Selected staff is unavailable, enter correct staffID'){
        return res.status(400).json({ error }); 
    }
    else if(error == 'Selected course is unavailable,enter correct courseID'){
        return res.status(400).json({ error }); 
    }
    else if(error == 'Creation of Staff-Course failed'){
        return res.status(409).json({ error });
    }
    else if(error == 'Selected course already exists for selected the staff'){
        return res.status(409).json({ error });
    }
    return res.status(400).json({ error }); 
}
}
//Deleting a staff's course
exports.deleteStaffCourse = async (req,res)=>{
const {staffid} = req.params;
const {courseid} = req.body;
try {
    const selectedFacilitatorCourse = await staffCourse.findOne(
        {where:{staffId:staffid,courseId:courseid}});
    if(!selectedFacilitatorCourse) {
        throw 'Enter correct staffID and correct courseID to access resource for deletion';
    } 
    await selectedFacilitatorCourse.destroy();
    res.status(200).json('Staff course deleted successfully') 
} catch (error) {
    if (error == 'Enter correct staffID and correct courseID to access resource for deletion'){
        return res.status(404).json({error})
    }
    return res.status(400).json({error})
}
}
//Updating a staff's course
exports.updateStaffCourse = async(req,res)=>{
const {staffid} = req.params;
const {oldcourse,newcourse} = req.body;

try {
    const selectedFacilitatorCourse = await staffCourse.findOne(
        {where:{staffId:staffid,courseId:oldcourse}});
    const facilitationCourse = await course.findOne({where:{id:newcourse}});
    if(!selectedFacilitatorCourse) {
        throw 'Enter a correct staffID and old courseID to access resource inorder to update';
    } 
    else if(!facilitationCourse){
       throw 'Selected course is unavailable,enter correct a courseID' ;
    }
    selectedFacilitatorCourse.courseId = newcourse;
    await selectedFacilitatorCourse.save();
    res.status(201).json(selectedFacilitatorCourse);
} catch (error) {
    if(error == 'Enter a correct staffID and old courseID to access resource inorder to update'){
        return res.status(404).json({error})
    }else if(error == 'Selected course is unavailable,enter correct a courseID'){
        return res.status(404).json({error})
    }
   return res.status(400).json({error});
   

}
}