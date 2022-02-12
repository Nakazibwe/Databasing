const {sequelize, department} = require('../models');

//Getting all departments
exports.getDepartment = async(req,res)=>{
try {
    const availableDepartments = await department.findAll();
    if(!availableDepartments){ throw 'No Departments Available '}
    res.json(availableDepartments)
} catch (error) {
    return res.status(400).json({ error });
}
}
//Posting department
exports.postDepartment = async (req,res)=>{
const {department_name} = req.body;
try {
    const newDepartment = await department.create({department_name});
    if(!newDepartment){ throw 'New Department not created'}
    res.json(newDepartment);
} catch (error) {
    return res.status(400).json({ error });
}
}