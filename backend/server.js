const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/authRoutes");

// Register routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});