require("dotenv").config(); // Load .env variables
const express = require("express");
const app = express();
const cors = require("cors");

// Use environment variables
const port = process.env.PORT || 3000;
const uploadDir = process.env.UPLOAD_DIR || "uploads/";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.use("/", require("./src/routes"));

// Start server
app.listen(port, () => {
  console.log(`Server running at ${process.env.SERVER_URL}:${port}`);
});
