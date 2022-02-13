// Trevor code
const checkID = async (table_id, Table_name) => {
    const results = await  Table_name.findOne({ where : { id: table_id } })
    // console.log(`HERE ARE THE RESULTS ${results}`)
    if(!results){
        return false
    }else{
        return true
    }
}

//My code. 
const checkID1 = async (table_id,Table)=>{
 const results1 = await Table.findOne({where:{id: table_id}});
 if(!results){
     return false;
 }
 return true;
}

//Trevor's code. 
const addStaff = async (req, res) => {
    console.log(req.body)
    const {id, first_name,last_name,date_of_birth,role_id,department_id} = req.body;   
    console.log(checkID(department_id,Department))
    if((checkID(role_id,Role)) == false){
        sendMessage(res, 400, "Role ID does not exists")
    }else if(checkID(department_id, Department) == false){
        sendMessage(res, 400, "Department ID does not exists")
    }else if((checkID(role_id, Role) == true) && (checkID(department_id, Department) == true)){
        createStaff(id, first_name, last_name, date_of_birth, role_id, department_id,res)
        const staff =  Staff.create(info)
        const newStaff = await  Staff.create({
            id,first_name,last_name,date_of_birth,role_id,department_id,
        });
        sendMessage(res, 201, newStaff)
    }
}

//My code. 
const addEmployee = async(req,res)=>{
    const {id, first_name,last_name,date_of_birth,role_id,department_id} = req.body;
    if(checkID(role_id,Role) == false){
        sendMessage(res, 400, "Role ID does not exists")
    }

};