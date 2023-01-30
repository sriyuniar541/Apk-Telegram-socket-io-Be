const Pool = require('../config/db');

const register = (data) => {
  // const { id, fullname, email, password } = data;
  // return new Promise((resolve, reject) =>
  //   Pool.query(
  //     `INSERT INTO users (id, email, password, fullname) 
  //     VALUES('${id}','${email}','${password}', '${fullname}')`,
  //     (err, result) => {
  //       if (!err) {
  //         resolve(result);
  //       } else {
  //         reject(err);
  //       }
  //     }
  //   )
  // );
  const {id,email,password,fullname,otp} = data
    console.log(data)
    return new Promise ((resolve,reject)=>
        Pool.query(`INSERT INTO users(id,email,password,fullname,verif,otp) VALUES('${id}','${email}','${password}','${fullname}',0,${otp})`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err.message)
            }
        })
    )
};

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users where email='${email}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const getUsers = (id,search) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users where id='${id}' `, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const updateUsers = (data) => {
  const { id, fullname, email, photo } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users 
      SET id='${id}',email='${email}', fullname='${fullname}', photo='${photo}'  
      WHERE id='${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const getAll = () => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const getAllById = (id,search) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM users 
      WHERE id NOT IN ('${id}') `,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const verification = (email) => {
  return new Promise((resolve, reject) => 
  Pool.query(`UPDATE users SET verif=1 WHERE email ='${email}'`,(err,result)=>{
      if(!err){
          resolve(result)
      } else {
          reject(err)
      }
  }))
}

module.exports = {
  register,
  findEmail,
  updateUsers,
  getUsers,
  getAll,
  getAllById,
  verification

};
