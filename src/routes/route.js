const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", BookController.createAuthor )
router.get("/listBooks ", BookController.listBooks )
router.get("/findAuthor", BookController.findAuthor )
router.get("/findBooks", BookController.findBooks )





module.exports = router;