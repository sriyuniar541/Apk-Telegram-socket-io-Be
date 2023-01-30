const express = require('express');
const router = express.Router();
const usersControllers = require('./users');
const GrupsController = require('./grup')


router.use('/users', usersControllers);
router.use('/group', GrupsController);

module.exports = router;
 