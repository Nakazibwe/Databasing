const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');

router.get('/roles',roleController.getRole);
router.post('/roles',roleController.postRole);
module.exports = router;