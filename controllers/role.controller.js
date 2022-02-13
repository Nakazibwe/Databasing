const {sequelize,role} = require('../models');

//Getting all roles. 
exports.getRoles = async(req,res)=>{
try {
    const availableRoles = await role.findAll();
    if(!availableRoles){ throw 'No available roles'}
    res.status(200).json(availableRoles);
} catch (error) {
    if (error == 'No available roles'){
        return res.status(404).json({ error });  
    }
    return res.status(400).json({ error });

}
}
//Getting a role.
exports.getRole = async(req,res)=>{
const {id} = req.params;
try {
    const selectedRole = await role.findOne({where:{id:id}});
    if(!selectedRole){throw 'Selected role is unavailable'};
    res.status(200).json(selectedRole);
} catch (error) {
    if(error == 'Selected role is unavailable'){
        return res.status(404).json({ error }); 
    }
  return res.status(400).json({error});

}
}


//Posting a role.
exports.postRoles = async (req,res)=>{
    const {staff_role,salary} = req.body;
try {
    const newRole = await role.create({staff_role,salary});
    if(!newRole){ throw 'New role creation Failed'}
    res.status(201).json(newRole);
} catch (error) {
    if(error == 'New role creation Failed'){
        return res.status(409).json({ error });
    }
    return res.status(400).json({ error });

}
}

//Updating a role.
exports.updateRole = async(req,res)=>{
    const {id} = req.params
    const {staff_role,salary} = req.body;
    try {
       const updateRole = await role.findOne({where:{id:id}});
       if(!updateRole){throw 'Selected role for update is unavailable'};
       updateRole.staff_role = staff_role;
       updateRole.salary = salary;
       await updateRole.save();
       res.status(201).json(updateRole);
    } catch (error) {
        if(error == 'Selected role for Update is unavailable'){
            return res.status(404).json({ error }); 
        }
        return res.status(400).json({ error });


}
};
//Deleting a role.
exports.deleteRole = async(req,res)=>{
const {id} = req.params;
try {
    const selecteddeletion = await role.findOne({where:{id:id}});
    if(!selecteddeletion){throw 'Role selected for deletion is unavailable'}
    await selecteddeletion.destroy();
    res.status(200).json('Role was successfully deleted');
} catch (error) {
    if(error == 'Role selected for deletion is unavailable'){
        return res.status(404).json({error});
        }
        return res.status(400).json({error});
    
}
}