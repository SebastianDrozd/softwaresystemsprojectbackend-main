const reviewRepo = require('../repo/ReviewRepo');

const createNewReview = async (req, res) => {
    const data = req.body;
    try {
        const results = await reviewRepo.createNewReview(data);
        res.status(201).json(results);
    } catch (error) {
        res.status(500).json({ error: "Error creating review" });
    }
}

const getReviewsByTutorId = async (req, res) => {
    const { tutorId } = req.params;
    try {
        const results = await reviewRepo.getReviewsByTutorId(tutorId);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews" });
    }
}
const getReviewsByStudentId = async (req, res) => {
    const { studentId } = req.params;
    try {
        const results = await reviewRepo.getReviewsByStudentId(studentId);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews" });
    }
}



module.exports = {
    createNewReview,
    getReviewsByTutorId,
    getReviewsByStudentId
}
