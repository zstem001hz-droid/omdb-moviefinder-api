// Dependencies
const express = require("express");
const router = express.Router();

// Controllers
const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

// Routes
router.get("/search", searchMovies);
router.get("/movies/:id", getMovieDetails);

// Export router
module.exports = router;
