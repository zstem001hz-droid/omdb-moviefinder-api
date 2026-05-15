// Dependencies
const axios = require("axios");

// Search Movies
const searchMovies = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error searching movies:", error.message);
    res.status(500).json({ error: "Failed to fetch movies." });
  }
};

// Get Movie Details
const getMovieDetails = async (req, res) => {};

// Exports
module.exports = { searchMovies, getMovieDetails };
