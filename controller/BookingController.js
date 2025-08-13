const bookingRepo = require("../repo/BookingsRepo");


const createBooking = async (req,res) => {
    const data = req.body;
    try{
        const results = await bookingRepo.createBooking(data)
        res.status(203).json(results)
    }catch(error){
        console.log(error)
    }
}

const getBookingsByTutorId = async (req,res) => {
    const {id} = req.params;
    try{
        const results = await bookingRepo.getBookingsByTutorId(id)
        res.status(200).json(results)
    }catch(error){
        res.status(500).json({ error: "Error fetching bookings" });
    }
}
const getBookingsByStudentId = async (req,res) => {
    const {id} = req.params;
    try{
        const results = await bookingRepo.getBookingsByStudentId(id)
        //console.log("results",results)
        res.status(200).json(results)
    }catch(error){
        res.status(500).json({ error: "Error fetching bookings" });
    }
}

const setBookingApproved = async(req,res) => {
    const {id,roomUrl} = req.body
    try{
        const results = await bookingRepo.setBookingApproved(id,roomUrl)
        res.status(200).json(results)
    }catch(error){
       res.status(500).json({ error: "Error approving booking" });
    }
}

const getRecentBookingsWithRoomUrlByStuedentId = async (req,res) => {
    const {id} = req.params;
    try{
        const results = await bookingRepo.getRecentBookingsWithRoomUrlByStuedentId(id)
        console.log("results",results)
        res.status(200).json(results)
    }
    catch(error){
        res.status(500).json({ error: "Error fetching recent bookings" });
    }
}

const finishBooking = async (req,res) => {
    const {id} = req.params;
    try{
        const results = await bookingRepo.finishBooking(id)
        res.status(200).json(results)
    }
    catch(error){
        res.status(500).json({ error: "Error finishing booking" });
    }
}

const getAllFinishedBookings = async (req, res) => {
    const { tutorId } = req.params;
    try{
        const results = await bookingRepo.getAllFinishedBookings(tutorId)
        res.status(200).json(results)
    }
    catch(error){
        res.status(500).json({ error: "Error fetching finished bookings" });
    }
}

const getAllFinishedBookingsByStudentId = async (req, res) => {
    const { studentId } = req.params;
    try{
        const results = await bookingRepo.getAllFinishedBookingsByStudentId(studentId)
        res.status(200).json(results)
    }
    catch(error){
        res.status(500).json({ error: "Error fetching finished bookings" });
    }
}



module.exports = {
    createBooking,
    getBookingsByTutorId,
    setBookingApproved,
    getBookingsByStudentId,
    getRecentBookingsWithRoomUrlByStuedentId,
    finishBooking,
    getAllFinishedBookings,
    getAllFinishedBookingsByStudentId
}