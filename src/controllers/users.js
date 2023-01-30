const { response } = require(`../middleware/common`);
const {
  register,
  findEmail,
  updateUsers,
  getUsers,
  getAll,
  getAllById,
  verification
} = require(`../models/users`);
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { generateToken, refreshToken } = require(`../helpers/auth`);
const refreshTokens = [];
const jwt = require('jsonwebtoken');
const email = require(`../middleware/email`);
const cloudinary = require('../config/cloudinary');
const Port = process.env.PORT;
const Host = process.env.HOST;



const usersControllers = {
  register: async (req, res, next) => {
    let { rows: [users] } = await findEmail(req.body.email);

    if (users) {
      return response(res, 404, false, 'email already use register fail');
    }
    //create otp
    let digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }

    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.password);
    let data = {
      id: uuidv4(),
      email: req.body.email,
      password,
      fullname: req.body.fullname,
      otp
    }
    console.log(data)

    try {
      const result = await register(data);
      if (result) {
        console.log(result)

        const sendEmail = email(data.email, otp, `http://${Host}:${Port}/${email}/${otp}`, data.fullname)
        if (sendEmail == 'email not send!') {
          return response(res, 404, false, null, 'register fail')
        }
        response(res, 200, true, { otp: data.otp }, 'register success please check your email to verif')
      }
    } catch (err) {
      console.log(err)
      response(res, 404, false, err.message, 'register fail')
    }
  },

  login: async (req, res, next) => {
    let {rows: [users]} = await findEmail(req.body.email);
    if (!users) {
      return response(res, 404, false, null, 'email not found');
    }
    if (users.verif == 0) {
      return response(res, 404, false, null, 'account not verified');
    }

    const password = req.body.password;
    const validation = bcrypt.compareSync(password, users.password);
    if (!validation) {
      return response(res, 404, false, null, 'wrong password');
    }

    delete users.password;
    let payload = {
      id: users.id,
      email: users.email,
      fullname: users.fullname
    };
    let accessToken = generateToken(payload);
    let refToken = refreshToken(payload);

    users.token = accessToken;
    users.refreshToken = refToken;
    refreshTokens.push(refreshToken);

    response(res, 200, true, users, 'login success');
  },

  otp: async (req, res, next) => {
    let { rows: [users] } = await findEmail(req.body.email)
    if (!users) {
        return response(res, 404, false,null, 'email not found')
        
    }
    if (users.otp == req.body.otp) {
        const result = await verification(req.body.email)
        return response(res, 200, true, result, 'email succes')
        
    }
    return response(res, 404, false,null, 'wrong otp please check your email')
  },

  update: async (req, res, next) => {
    try {
      const { fullname, email } = req.body;
      const { id } = req.payload;
      const { rows: [users], } = await getUsers(id);
      const data = {
        id,
        email,
        fullname
      };

      if (req.file) {
        const image = await cloudinary.uploader.upload(req.file.path, {
          folder: 'telegram',
        });

        data.photo = image.url;
      } else {
        data.photo = users.photo;
      }

      await updateUsers(data);
      response(res, 200, true, data, 'update data users success');
    } catch (error) {
      console.log(error.message);
      response(res.message, 404, false, 'update data users fail');
    }
  },

  getAll: async (req, res) => {
    try {
      const result = await getAll();

      if (result) {
        response(res, 200, true, result.rows, 'get all users success');
      }
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, ' get all users fail');
    }
  },

  getAllById: async (req, res) => {
    try {
      const { id } = req.payload;

      const result = await getAllById(id);

      if (result) {
        response(res, 200, true, result.rows, 'get all users success');
      }
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, ' get all users fail');
    }
  },

  getByUserId: async (req, res, next) => {
    try {
      const id = req.payload.id;
      const {
        rows: [users],
      } = await getUsers(id);

      response(res, 200, true, users, 'get data users success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'get data users fail');
    }
  }
};

exports.usersControllers = usersControllers;
