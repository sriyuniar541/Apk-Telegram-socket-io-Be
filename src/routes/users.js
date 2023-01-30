const express = require(`express`);
const router = express.Router();
const { usersControllers } = require(`../controllers/users`);
const upload = require('../middleware/upload');
const { protect } = require('../middleware/auth');
let multer = require('multer');
let uploaded = multer();


router.post(`/register`, uploaded.array(), usersControllers.register);//
router.post('/login', uploaded.array(), usersControllers.login);//
router.post('/verif/otp', uploaded.array(), usersControllers.otp);//
router.get('/All', usersControllers.getAll);//
router.get('/Get/:id', protect, usersControllers.getAllById);
router.get('/get/by/usersId', protect, usersControllers.getByUserId);//
router.put('/update',protect, upload.single('photo'), usersControllers.update);

module.exports = router;