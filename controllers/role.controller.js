const {sequelize,role} = require('../models');

//Getting all roles. 
exports.getRole = async(req,res)=>{
try {
    const availableRoles = await role.findAll();
    if(!availableRoles){ throw 'No available roles'}
    res.json(availableRoles);
} catch (error) {
    return res.status(400).json({ error });
}
}

//Posting a role.
exports.postRole = async (req,res)=>{
    const {staff_role,salary} = req.body;
try {
    const newRole = await role.create({staff_role,salary});
    if(!newRole){ throw 'Role was no created'}
    res.json(newRole);
} catch (error) {
    return res.status(400).json({ error });
}
}