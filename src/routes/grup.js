const express = require('express')
const router = express.Router()
const {GrupsController} = require('../controllers/grup')
const {protect} = require('../middleware/auth')
const upload  = require('../middleware/upload')  


router.get('/All',GrupsController.getGrupsAll)
router.get('/',protect,GrupsController.getGrups)
router.get('/:id',protect,GrupsController.getGrupsId)
router.delete('/:id',protect,GrupsController.delete)
router.put('/:id',protect,upload.single('photo'),GrupsController.UpdateGrups)
router.post('/',protect,upload.single('photo'),GrupsController.InsertGrups)

module.exports = router