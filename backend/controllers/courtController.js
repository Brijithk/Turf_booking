const Court = require("../models/Court");

exports.getCourts = async (req, res) => {
    try {
        const courts = await Court.find();

        res.status(200).json(courts);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch courts",
        });
    }
};