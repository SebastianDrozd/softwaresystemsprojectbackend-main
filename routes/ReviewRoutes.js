const express = require("express");
const router = express.Router();
const reviewController = require("../controller/ReviewController");

// Create a new review
router.post("/", reviewController.createNewReview);

// Get reviews by tutor ID
router.get("/tutor/:tutorId", reviewController.getReviewsByTutorId);

// Get reviews by student ID
router.get("/student/:studentId", reviewController.getReviewsByStudentId);

module.exports = router;
