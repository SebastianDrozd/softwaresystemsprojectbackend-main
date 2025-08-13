const InternalServerError = require("../error/InternalServerError");
const pool = require("../util/dbconfig")

const createNewReview = async (data) => {
    const {TutorId, StudentId,Description} = data;
    try {
        const sql = `INSERT INTO Reviews (TutorId, StudentId, Description)
                     VALUES (?, ?, ?)`;
        const [results] = await pool.query(sql, [TutorId, parseInt(StudentId), Description]);
        return results;
    } catch (error) {
        throw new InternalServerError("Error creating review");
    }
}

const getReviewsByTutorId = async (tutorId) => {
    try {
        const sql = `SELECT * FROM Reviews
                    INNER JOIN users ON Reviews.StudentId = users.id
                    WHERE TutorId = ?`;
        const [results] = await pool.query(sql, [tutorId]);
        return results;
    }
    catch (error) {
        throw new InternalServerError("Error fetching reviews");
    }
}

const getReviewsByStudentId = async (studentId) => {
    try {
        const sql = `SELECT * FROM Reviews WHERE StudentId = ?`;    
        const [results] = await pool.query(sql, [studentId]);
        return results;
    }
    catch (error) {
        throw new InternalServerError("Error fetching reviews");
    }
}



module.exports = {
    createNewReview,
    getReviewsByTutorId,
    getReviewsByStudentId
}