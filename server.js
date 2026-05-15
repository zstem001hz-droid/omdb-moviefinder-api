// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
const movieRoutes = require("./routes/movieRoutes");
app.use("/api", movieRoutes);

// Port
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
