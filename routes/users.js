1//this is the routes folder that will link the controllers folder to the index file
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

//I will create the following routes inside of the routes folder.....GET, GET(user/:id), POST, PUT, DELETE

router.get("/users", usersController.listUsers);//this gets a list of all the users, by using listUsers function in controllers file 
router.get("/users/:id", usersController.showUser);//this is a get request that selects a single user
router.post("/users", usersController.createUser);//this is a request to create a new user
router.put("/users/:id", usersController.updateUser);//this is a request to update an existing user
router.delete("/users/:id", usersController.deleteUser);//this is how we would delete an already existing user

module.exports = router;
