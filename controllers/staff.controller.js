const { sequelize,staff,role,department } = require("../models");

//Getting all the staff in the table
exports.getStaffs = async (req,res)=>{
    try {
        const availableStaff = await staff.findAll();
        if(!availableStaff){
           throw 'No available staff currently';
        }
        res.json(availableStaff); 
    } catch (error) {
        return res.status(400).json({ error });
    }

};
//Posting staff in the table. 
exports.postStaffs = async (req,res)=>{
const {first_name,last_name,date_of_birth,roleId,departmentId} = req.body;
try {
    const staffRole = await role.findOne({where:{id:req.body.roleId}});
    const staffdepartment = await department.findOne({where:{id:req.body.departmentId}})
    if(!(staffRole)){ throw 'The role ID  entered is incorrect.'}
    else if(!(staffdepartment)){ throw 'The department ID  entered is incorrect.'}
    const newStaff = await  staff.create({
        first_name,last_name,date_of_birth,roleId,departmentId
    });
    if(!newStaff){ throw 'New Staff was not created'}
    res.status(201).json(newStaff);
} catch (error) {
    if(error == 'The role ID  entered is incorrect.'){
        return res.status(400).json({ error });
    }
    else{
        return res.status(400).json({ error }); 
    }
}
}