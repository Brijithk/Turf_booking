// routes/courtRoutes.js

const express = require("express");
const router = express.Router();
const Court = require("../models/Court");

// Get all courts
router.get("/", async (req, res) => {
    const courts = await Court.find();
    res.json(courts);
});

// Add a court
router.post("/", async (req, res) => {
    try {
        const court = new Court(req.body);
        await court.save();

        res.status(201).json({
            message: "Court added successfully",
            court,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});

module.exports = router;