<br />
<p align="center">

  <h3 align="center">TELEGRAM</h3>
  <p align="center">
    <image align="center" width="200" src='https://res.cloudinary.com/dxrsjyu6o/image/upload/v1675092680/telegramSs/Group_5856_vav8t6.png' />
  </p>

  <p align="center">
    <br />
    <a href="https://github.com/sriyuniar541/Apk-Telegram-socket-io-Be"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</p>



## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Run Locally](https://github.com/helmipradita/be-telegram/edit/main/README.md#run-locally)
* [Demo](https://github.com/helmipradita/be-telegram/edit/main/README.md#demo)
  *  [x] [API Reference - Auth](#api-reference---auth)
  *  [x] [API Reference - Group](#api-reference---group)
* [Related Project](#related-project)
* [Contact](#contact)

## About The Project

Application for chat
## Run Locally

Clone the project

```bash
  git clone https://github.com/sriyuniar541/Apk-Telegram-socket-io-Be
```

Go to the project directory

```bash
  cd Apk-Telegram-socket-io-Be
```

Install dependencies

```bash
  npm install
```

Setup .env copy from .env.example

```bash
  PORT=
  HOST=
  JWT_KEY=
  PG_CONNECT=


  CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=
```

Start the server

```bash
  npm run dev
```


## API Reference - Auth

<details>
<summary>Show</summary>
<br>

#### Register 

```
  POST /users/register
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `password`    | `string` | **Required**. password  |
| `fullname` | `string` | **Required**. fullname          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "otp": "289495"
  },
  "message": "register success please check your email to verif"
}
```

#### Login

```
  POST /users/login
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "3618c635-6180-4637-9880-4b10abbd53dd",
    "email": "sriyuniar863@gmail.com",
    "fullname": "user 1",
    "adress": null,
    "phonenumber": null,
    "photo": null,
    "verif": 1,
    "otp": 289495,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2MThjNjM1LTYxODAtNDYzNy05ODgwLTRiMTBhYmJkNTNkZCIsImVtYWlsIjoic3JpeXVuaWFyODYzQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoidXNlciAxIiwiaWF0IjoxNjc1MTU2OTg2LCJleHAiOjE2NzUxNjA1ODZ9.uzmJmPjlv3dWA8AXiI-vyINFO2_Qp5O34AVBLUxBfVA",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2MThjNjM1LTYxODAtNDYzNy05ODgwLTRiMTBhYmJkNTNkZCIsImVtYWlsIjoic3JpeXVuaWFyODYzQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoidXNlciAxIiwiaWF0IjoxNjc1MTU2OTg2LCJleHAiOjE2NzUyNDMzODZ9.qqDQPr8oUQc0qqBdcYXGOj6djUH7dgv-IkAM_qX_YYI"
  },
  "message": "login success"
}
```

#### Verification

```
  POST /users//verif/otp
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `otp` | `string` | **Required**. otp          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {},
  "message": "email succes"
}
```

#### Edit profile 

```
  PUT /users/update
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `email` | `string` | **Required**. email |
| `fullname`     | `string` | **Required**. fullname     |
| `photo`    | `file`   | **Required**. photo    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "3618c635-6180-4637-9880-4b10abbd53dd",
    "email": "sriyuniar86@gmail.com",
    "fullname": "sri keren",
    "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675157383/telegram/hwc1nk84muhoblqqe9il.png"
  },
  "message": "update data users success"
}
```

#### Get all users

```
  GET /users/All
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "ecd3d781-8f99-451c-ac10-f8cae24aa4c4",
      "email": "sriyuniar86@gmail.com",
      "password": "$2a$10$LOosMpW6vNf90MipHv1CjeRMk/jh/ms1nRNF0.xATrvKScPB2X0JC",
      "fullname": "user 1",
      "adress": null,
      "phonenumber": null,
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675044867/telegram/ol11shpdqv5rgqxffgr2.png",
      "verif": 1,
      "otp": 325303
    },
    {
      "id": "dbc80f67-bf37-488a-945d-793657b641f0",
      "email": "sriyuniar866@gmail.com",
      "password": "$2a$10$lwvZdPa7XT2dMVR8z8NlqO6ZK/th9KkzqE1WYnWrs7uPP9eDcCjDe",
      "fullname": "user 2",
      "adress": null,
      "phonenumber": null,
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675044922/telegram/ildunfc6ipvg4djkokkf.png",
      "verif": 1,
      "otp": 925862
    },
    {
      "id": "e6ad2e89-7380-44db-b824-1eb7f9b56cca",
      "email": "sriyuniar862@gmail.com",
      "password": "$2a$10$aw4NqIgT.OmMkPk.cz3VaeClx1llAzPDE.jb7f6wClVxc4jC1t3QO",
      "fullname": "user 3",
      "adress": null,
      "phonenumber": null,
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675045031/telegram/wdivjanjswjupvtkokvl.png",
      "verif": 1,
      "otp": 20659
    },
    {
      "id": "c560ff6c-d68d-43cb-ae94-957e2c0692f4",
      "email": "sriyuniar541@gmail.com",
      "password": "$2a$10$LKemhUAEjWvxa33nqwlUB.RWu3e2rK9e.CqFsdE/5AYyQJVzy1MlW",
      "fullname": "sri baru",
      "adress": null,
      "phonenumber": null,
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675046287/telegram/gberadusxtjyeimsjzx7.png",
      "verif": 1,
      "otp": 281084
    },
    {
      "id": "3618c635-6180-4637-9880-4b10abbd53dd",
      "email": "sriyuniar86@gmail.com",
      "password": "$2a$10$KgEEjibMiByFgSKKsJiPZO.xy1qyJNJd5slvVMPta8RXoMRz96gVu",
      "fullname": "sri keren",
      "adress": null,
      "phonenumber": null,
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675157383/telegram/hwc1nk84muhoblqqe9il.png",
      "verif": 1,
      "otp": 289495
    }
  ],
  "message": "get all users success"
}
```

#### Get users by id

```
  GET /users/Get/:id
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "3618c635-6180-4637-9880-4b10abbd53dd",
    "email": "sriyuniar86@gmail.com",
    "password": "$2a$10$KgEEjibMiByFgSKKsJiPZO.xy1qyJNJd5slvVMPta8RXoMRz96gVu",
    "fullname": "sri keren",
    "adress": null,
    "phonenumber": null,
    "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675157383/telegram/hwc1nk84muhoblqqe9il.png",
    "verif": 1,
    "otp": 289495
  },
  "message": "get data users success"
}
```

#### Get users by user_id
```
  GET /users/get/by/usersId
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "3618c635-6180-4637-9880-4b10abbd53dd",
    "email": "sriyuniar86@gmail.com",
    "password": "$2a$10$KgEEjibMiByFgSKKsJiPZO.xy1qyJNJd5slvVMPta8RXoMRz96gVu",
    "fullname": "sri keren",
    "adress": null,
    "phonenumber": null,
    "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675157383/telegram/hwc1nk84muhoblqqe9il.png",
    "verif": 1,
    "otp": 289495
  },
  "message": "get data users success"
}

```

</details>

## API Reference - Group

<details>
<summary>Show</summary>
<br>

#### Insert group

```
  POST /group
```
Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form 

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id    |
| `name`     | `string` | **Required**. name     |
| `photo`     | `string` | **Required**. photo     |
| `id_user`     | `string` | **Required**. id_user from users.id    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "insert grups success"
}

```

#### Get all group 

```
  GET /group/All
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "3d6c008c-8ea6-409e-b8cc-f3e96b256394",
      "name": "Javascript",
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675045095/telegram/vvshuw0zdshxhsjjes4s.jpg",
      "id_user": "ecd3d781-8f99-451c-ac10-f8cae24aa4c4"
    },
    {
      "id": "454df6e8-651b-4eef-a704-8cfb2a1f6447",
      "name": "Golang",
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675045236/telegram/ospatmiz84nxpffghsj7.jpg",
      "id_user": "ecd3d781-8f99-451c-ac10-f8cae24aa4c4"
    },
    {
      "id": "b1c0394a-19b4-41e7-9dbb-4ddd8b1ae7e1",
      "name": "CSS",
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675157791/telegram/fi6eqkfddjmdxkvlu4xx.png",
      "id_user": "3618c635-6180-4637-9880-4b10abbd53dd"
    }
  ],
  "message": "get grups success"
}

```

#### Get group by user_id

```
  GET /group
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "b1c0394a-19b4-41e7-9dbb-4ddd8b1ae7e1",
      "name": "CSS",
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675157791/telegram/fi6eqkfddjmdxkvlu4xx.png",
      "id_user": "3618c635-6180-4637-9880-4b10abbd53dd"
    }
  ],
  "message": "get grups success"
}

```
#### Get group by id

```
  GET /group
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params 

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. req.params.id    |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "b1c0394a-19b4-41e7-9dbb-4ddd8b1ae7e1",
      "name": "CSS",
      "photo": "http://res.cloudinary.com/dxrsjyu6o/image/upload/v1675157791/telegram/fi6eqkfddjmdxkvlu4xx.png",
      "id_user": "3618c635-6180-4637-9880-4b10abbd53dd"
    }
  ],
  "message": "get grups success"
}

```

#### Update group

```
  PUT /group/:id
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from skill_id    |

Field body form 

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id    |
| `name`     | `string` | **Required**. name     |
| `photo`     | `string` | **Required**. photo     |
| `id_user`     | `string` | **Required**. id_user from users.id    |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "update grups success"
}

```

#### Delete group

```
  PUT /group/:id
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `id` | `string` | **Required**. id from skill_id        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "delete grups success"
}

```

</details>


## Related Project
* [`Backend Project Telegram `](https://github.com/sriyuniar541/Apk-Telegram-socket-io-Be)

## Contact
  * Sri Yuniar [@sriyuniar541](https://github.com/sriyuniar541)
