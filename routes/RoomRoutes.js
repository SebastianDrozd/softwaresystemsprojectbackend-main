const express = require("express")
const router = express.Router()
const roomController = require("../controller/RoomController")

//create a new room 
router.post("/createroom/:id",roomController.createVideoRoom)



module.exports = router