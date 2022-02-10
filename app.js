const express = require('express')
const app = express();
const { sequelize } = require('./models');
require('dotenv').config();
const port = 5000; 

// Middleware
app.use(express.json());

//Listening port. 
app.listen(port, async () => {
    console.log(`Application running on http://localhost:${port}`);
    await sequelize.authenticate();
    console.log('Database Connected!');
})