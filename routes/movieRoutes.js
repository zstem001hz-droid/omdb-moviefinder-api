// Dependencies
const express = require("express");
const router = express.Router();

// Routes
router.get("/search", searchMovies);
router.get("/movies/:id", getMovieDetails);

// Export router
module.exports = router;

