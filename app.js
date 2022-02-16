const express = require('express')
const app = express();
const { sequelize } = require('./models');
require('dotenv').config();
const port = 5000; 

//Requiring the routes.
const staffRoutes = require('./routes/staff.routes');
const roleRoutes = require('./routes/role.routes');
const departmentRoutes = require('./routes/department.routes');
const courseRoutes = require('./routes/course.routes');
const staffCourseRoutes = require('./routes/staff.course.routes');

// Middleware
app.use(express.json());

//Routes.
app.use('/',staffRoutes);
app.use('/',roleRoutes);
app.use('/',departmentRoutes);
app.use('/',courseRoutes);
app.use('/',staffCourseRoutes);


//Listening port. 
app.listen(port, async () => {
    console.log(`Application running on http://localhost:${port}`);
    await sequelize.authenticate();
    console.log('Database Connected!');
})