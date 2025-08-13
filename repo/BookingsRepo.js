const InternalServerError = require("../error/InternalServerError");
const pool = require("../util/dbconfig")


const createBooking = async (data) => {
    const {
        TutorId,
        StudentId,
        PostId,
        HelpType,
       SessionDate,
       StartTime,
       EndTime,
       Status,
       Notes
    } = data;
    try{
        const sql = `Insert into Bookings
                     (TutorId,StudentId,PostId,HelpType,SessionDate,StartTime,EndTime,Status,Notes)
                     values (?,?,?,?,?,?,?,?,?)`
        const [results] = await pool.query(sql,
       [TutorId,
        StudentId,
        PostId,
        HelpType,
        SessionDate,
        StartTime,
        EndTime,
        Status,
        Notes])
        return results 
    }catch(error){
        throw new InternalServerError()
    }
}


const getBookingsByTutorId = async (id) => {
    const sql = `SELECT * From Bookings where TutorId = ?`
    const [results] = await pool.query(sql,[id])
    return results;
}
const getBookingsByStudentId = async (id) => {
    const sql = `SELECT Bookings.*, users.FirstName, users.LastName, users.Email
                From Bookings
                Inner Join users on Bookings.TutorId = users.id
                where StudentId = ?`
    const [results] = await pool.query(sql,[id])
    return results;
}

const setBookingApproved = async (id,roomUrl) => {
    try{
          const sql = `UPDATE Bookings SET Status = 'Approved', RoomURL = ? where BookingId = ?`
          const [results] = await pool.query(sql,[roomUrl,id])
          return results;

    }catch(error){
        new InternalServerError()
    }
  
}

const getRecentBookingsWithRoomUrlByStuedentId = async (id) => {
    const sql = `SELECT  Bookings.*, users.FirstName, users.LastName, users.Email
        From Bookings
                Inner Join users on Bookings.TutorId = users.id
     where StudentId = ? and RoomURL IS NOT NULL ORDER BY SessionDate DESC LIMIT 3`
    const [results] = await pool.query(sql,[id])
    return results;
}

const finishBooking = async (id) => {
    const sql = `UPDATE Bookings SET Status = 'Finished' where BookingId = ?`
    const [results] = await pool.query(sql,[id])
    return results;
}

const getAllFinishedBookings = async (tutorId) => {
    const sql = `SELECT * FROM Bookings WHERE Status = 'Finished' AND TutorId = ?`
    const [results] = await pool.query(sql,[tutorId])
    return results;
}

const getAllFinishedBookingsByStudentId = async (studentId) => {
    const sql = `SELECT * FROM Bookings WHERE Status = 'Finished' AND StudentId = ?`
    const [results] = await pool.query(sql,[studentId])
    return results;
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