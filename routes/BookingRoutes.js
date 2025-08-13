const express = require("express")
const router = express.Router()
const bookingController = require("../controller/BookingController")

//create new booking
router.post("/",bookingController.createBooking)

//set booking to approved
router.post("/approve",bookingController.setBookingApproved)

//get booking by tutorid
router.get("/tutor/:id",bookingController.getBookingsByTutorId)

//get booking by studentid
router.get("/student/:id",bookingController.getBookingsByStudentId)

//get recent bookings with room url by student id
router.get("/recent/roomurl/:id",bookingController.getRecentBookingsWithRoomUrlByStuedentId)

//finish booking
router.put("/finish/:id",bookingController.finishBooking)

//get all finished bookings
router.get("/finished/:tutorId",bookingController.getAllFinishedBookings)

module.exports = router;