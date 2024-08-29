
# Project Title

A brief description of what this project does and who it's for

# Overview
The MERN Estate Management System is a full-stack application for managing property listings. It includes features for user authentication, creating and managing property listings, and integrating Firebase for additional functionality. The application uses the MERN stack (MongoDB, Express.js, React, Node.js) and Redux for state management.





## Tech Stack


**Frontend:**
- **React**
- **Redux** 
- **Tailwind CSS** 
- **Firebase** 

**Backend:**

- **Node.js**
- **Express.js**
- **MongoDB** 
- **JWT** 
- **Socket.io** 
- **Cookie-parser** 
## Installation

- Clone the repository:  
  `git clone https://github.com/shwetd19/LandChain.git`

- Install dependencies:
      
      `cd backend`
      `npm install`

- Start the server:    
  `npm start`

- Frontend:
- Navigate to the client directory:   
   `cd client`
- Install dependencies:   
```   
     `cd backend`
     `npm install`
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Create a .env file and add the following environment variables:
- `MONGO=<your-mongodb-connection-string>`
- `JWT_SECRET=<your-jwt-secret>`
## Features

- **User Authentication:** Sign up, sign in, and sign out using JWT and Google OAuth.
- **Listing Management: Create, update, delete, and retrieve property listings.**
- **Real-Time Updates:** Manage listings and user data with real-time updates using Socket.io.
- **Secure Routes:** Protected routes ensure only authenticated users can access certain functionalities.
- **Responsive UI:** Built with React and styled using CSS and Tailwind CSS.


## API Reference

#### Create a new user

```http
  POST /api/auth/signup:
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------  |
| `none`    | `none`   | **Required**. Register a new user. |

#### Log out a user

```http
  GET /api/auth/signout

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`    | `none`   | **Required**. Log out a user      |

#### Delete a listing


```http
  DELETE /api/listing/delete/${id}

```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `id`      | `string` | **Required**.ID of listing to delete         |


#### Retrieve a listing


```http
  GET /api/listing/get


```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `none`    | `none`   | **Required**.ID of user to fetch             |

#### Retrieve listings created by a specific user

```http
  GET /api/user/listings/${id}


```

| Parameter | Type     | Description                                             |
| :-------- | :------- | :------------------------------------------------------ |
| `id`      | `string` | **Required**.ID of user to fetch listings created(user) |
