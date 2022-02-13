const res = require("express/lib/response");
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
        if(error == 'No available staff currently'){
            return res.status(404).json({ error });
        }
        
        return res.status(400).json({ error })
    }

};
// Getting one staff.
exports.getStaff = async(req,res)=>{
const {id} = req.params;
try {
    const selectedStaff = await staff.findOne({where:{id:id}});
    if(!selectedStaff){throw 'Staff selected is unavailable'}
    res.status(200).json(selectedStaff);
} catch (error) {
    if(error == 'Staff selected is unavailable'){
        return res.status(404).json({error});
    }
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
    if(!newStaff){ throw 'New Staff creation failed'}
    res.status(201).json(newStaff);
} catch (error) {
    if(error == 'The role ID  entered is incorrect.'){return res.status(400).json({ error });}
    else if (error == 'The department ID  entered is incorrect.'){return res.status(400).json({ error }); }
    else if(error == 'New Staff creation failed'){return res.status(409).json({ error });}
    return res.status(400).json({ error });
}
};

// Updating a staff. 
exports.updateStaff = async(req,res)=>{
    const {id} = req.params;
    const {first_name,last_name,date_of_birth,roleId,departmentId} = req.body;
    try {
        const staffRole = await role.findOne({where:{id:req.body.roleId}});
        const staffdepartment = await department.findOne({where:{id:req.body.departmentId}})
      
        const updateStaff = await staff.findOne({where:{id:id}});
        if(!updateStaff){throw 'Staff selected is unavailable!'}
        updateStaff.first_name = first_name;
        updateStaff.last_name = last_name;
        updateStaff.date_of_birth = date_of_birth;
        updateStaff.roleId = roleId;
        updateStaff.departmentId = departmentId;
        if(!(staffRole)){ throw 'The role ID  entered is incorrect.'}
        else if(!(staffdepartment)){ throw 'The department ID  entered is incorrect.'}
        await updateStaff.save();
        res.status(201).json(updateStaff);

    } catch (error) {
        if(error == 'Staff selected is unavailable!'){
           return  res.status(404).json({error});
        }else{
            return res.status(400).json({error});
        }
    }
}

//Deleting a staff. 
exports.deleteStaff = async(req,res)=>{
const {id} = req.params;
try {
    const deletecandidate = await staff.findOne({where:{id:id}});
    if(!deletecandidate){throw 'Selected staff for deletion is unavailable'};
    await deletecandidate.destroy();
    res.status(200).json('Staff was successfully deleted')
} catch (error) {
    if(error == 'Selected staff is unavailable'){
    return res.status(404).json({error});
    }
    return res.status(400).json({error});
}

}
