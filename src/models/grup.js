const Pool = require("./../config/db");


const getGroupsAll = () => {
    return new Promise((resolve, reject) => 
    Pool.query(`SELECT * FROM grups `,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}

const getGroups = (id_user) => {
    return new Promise((resolve, reject) => 
    Pool.query(`SELECT * FROM grups WHERE id_user = '${id_user}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}

const getGroupsId = (id) => {
    return new Promise((resolve, reject) => 
    Pool.query(`SELECT * FROM grups WHERE id = '${id}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}

const deleteGroups = (id) => {
    return new Promise((resolve, reject) => 
    Pool.query(`DELETE FROM grups WHERE id = '${id}'`,(err,result)=>{
        if(!err){
            resolve(result) 
        } else {
            reject(err)
        }
    }))
}


const updateGroups = (id,data) => {
    console.log(data,'update model')
    const {name,photo} = data
    return new Promise ((resolve,reject)=>
        Pool.query(`UPDATE grups SET name='${name}',photo='${photo}' WHERE id ='${id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err.message)
            }
        })
    )
}

const insertGroups = (data) => {
    console.log(data,'dari model')
    const {id,name,photo,id_user} = data
    return new Promise ((resolve,reject)=>
        Pool.query(`INSERT INTO grups (id,name,photo,id_user) VALUES ('${id}','${name}','${photo}','${id_user}')`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err.message)
            }
        })
    )
}



module.exports = {getGroups,deleteGroups,updateGroups,insertGroups,getGroupsId,getGroupsAll}