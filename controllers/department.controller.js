const {sequelize, department} = require('../models');

//Getting all departments
exports.getDepartments = async(req,res)=>{
try {
    const availableDepartments = await department.findAll();
    if(!availableDepartments){ throw 'No Departments Available '}
    res.status(200).json(availableDepartments);
} catch (error) {
    if(error == 'No Departments Available '){
        return res.status(404).json({ error });
    }
    return res.status(400).json({ error });

}
};

//Get one department. 
exports.getDepartment = async(req,res)=>{
    const {id} = req.params;
try {
    const selectedDepartment = await department.findOne({where:{id:id}});
    if(!selectedDepartment){throw 'Selected department is unavailable'}
    res.status(200).json(selectedDepartment);
} catch (error) {
    if(error == 'Selected department is unavailable'){
        return res.status(404).json({ error });
    }
    return res.status(400).json({ error });
}

};

//Posting department
exports.postDepartments = async (req,res)=>{
const {department_name} = req.body;
try {
    const newDepartment = await department.create({department_name});
    if(!newDepartment){ throw 'New Department creation failed'}
    res.status(201).json(newDepartment);
} catch (error) {
    if(error == 'New Department creation failed'){
        return res.status(409).json({ error });
    }
    return res.status(400).json({ error });
}
};

//Update Department.
exports.updateDepartment = async(req,res)=>{
const {id} = req.params;
const {department_name} = req.body;
try {
    const selectedUpdated = await department.findOne({where:{id:id}});
    if(!selectedUpdated){throw 'Selected department for updating is unavailable';}
    selectedUpdated.department_name = department_name;
    await selectedUpdated.save();
    res.status(201).json(selectedUpdated);
} catch (error) {
    if(error == 'Selected department for updating is unavailable'){
        return res.status(404).json({ error });
    }
    return res.status(400).json({ error });

}

}

//Delete Department
exports.deleteDepartment = async (req,res)=>{
    const {id} = req.params;
    try {
        const selectedDeletion = await department.findOne({where:{id:id}});
        if(!selectedDeletion){throw 'Selected department for deleting is unavailable'}
        await selectedDeletion.destroy();
        res.status(200).json('Department successfully deleted');
    } catch (error) {
        if(error == 'Selected department for deleting is unavailable'){
            return res.status(404).json({ error });
        }
        return res.status(400).json({ error });
    }

};