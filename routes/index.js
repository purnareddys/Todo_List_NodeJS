const express = require("express");

//Router
const router = express.Router();

//import controller
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);

//testing
console.log("This is working");
//Exporting
module.exports = router;
