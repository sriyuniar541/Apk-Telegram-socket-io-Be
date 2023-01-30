const { response } = require('../middleware/common'); 
const  {getGroups,deleteGroups,updateGroups,insertGroups,getGroupsId, getGroupsAll} = require('../models/grup') 
const bcrypt = require('bcryptjs'); 
const { v4: uuidv4 } =  require('uuid'); 
const cloudinary = require('../config/cloudinary');
const Port = process.env.PORT 
const Host = process.env.HOST

const GrupsController = { 
    getGrupsAll : async (req,res,next) => {
        try{
            const result = await getGroupsAll()
            response(res,200,true,result.rows,'get grups success')
        } catch (err) {
            response(res,404,err.message,'get grups fail ')
        }
    },

    getGrups : async (req,res,next) => {
        try{
            let id_user = req.payload.id
            const result = await getGroups(id_user)
            response(res,200,true,result.rows,'get grups success')
        } catch (err) {
            response(res,404,err.message,'get grups fail ')
        }
    },

    getGrupsId : async (req,res,next) => {
        try{
            const result = await getGroupsId(req.params.id)
            response(res,200,true,result.rows,'get grups success')
        } catch (err) {
            response(res,404,err.message,'get grups fail ')
        }
    },

    delete : async (req,res,next) => {
        try{
           
            const result = await deleteGroups(req.params.id)
            response(res,200,true,result.rows,'delete grups success')
        } catch (err) {
            response(res,404,err.message,'delete grups fail ')
        }
    },

    UpdateGrups : async (req,res,next) => {
        try{
            // const photo = req.file.filename 
            // const uri = `http://${Host}:${Port}/img/${photo}`
            const name = req.body.name
            const data = {
                name,
                // photo : uri
            }

            if (req.file) {
                const image = await cloudinary.uploader.upload(req.file.path, {
                  folder: 'telegram',
                });
        
                data.photo = image.url;
              } else {
                data.photo = users.photo;
              }  
            const result = await updateGroups(req.params.id,data)
            console.log(data)
            response(res,200,true,result.rows,'update grups success')
        } catch (err) {
            response(res,404,err.message,'update grups fail ')
        }
    },

    InsertGrups : async (req,res,next) => {
        try{    
            // const photo = req.file.filename 
            // const uri =  `http://${Host}:${Port}/img/${photo}`
            const name = req.body.name
            const id_user = req.payload.id
            const data = {
                id : uuidv4(),
                name,   
                // photo : uri,
                id_user,
            }

            if (req.file) {
                const image = await cloudinary.uploader.upload(req.file.path, {
                  folder: 'telegram',
                });
        
                data.photo = image.url;
              } else {
                data.photo = users.photo;
              }

            console.log(data,'dari controler')
            const result = await insertGroups(data)
            response(res,200,true,result.rows,'insert grups success')
        } catch (err) {
            response(res,404,err.message,'insert grups fail ')
        }
    },
}



exports.GrupsController = GrupsController 