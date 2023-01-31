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
    <a href="https://github.com/sriyuniar541/Apk-Telegram-socket-io-Be">View Demo</a>
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
  *  [x] [API Reference - Group](#api-reference---Group)
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

```

#### Get all users

```
  GET /users/All
```

Response 200

```json

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

```

</details>

## API Reference - Group(chat)

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

```

#### Get all group 

```
  GET /group/All
```

Response 200

```json

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

```

</details>


## Related Project
* [`Backend Project Telegram `](https://github.com/sriyuniar541/Apk-Telegram-socket-io-Be)

## Contact
  * Sri Yuniar [@sriyuniar541](https://github.com/sriyuniar541)
