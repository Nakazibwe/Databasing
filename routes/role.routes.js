const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');

//Get All Roles.
router.get('/roles',roleController.getRoles);
//Get A Role.
router.get('/roles/:id',roleController.getRole);
//Post Roles.
router.post('/roles',roleController.postRoles);
//Update A Role.
router.put('/roles/:id',roleController.updateRole);
//Delete  A Role
router.delete('/roles/:id',roleController.deleteRole);

module.exports = router;