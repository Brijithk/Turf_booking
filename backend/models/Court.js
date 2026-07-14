const mongoose = require("mongoose");

const courtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    time_start: {
        type: String,
        required: true,
    },
    time_end: {
        type: String,
        required: true,
    },
    slot_count: {
        type: Number,
        required: true,
    },
    image_url: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model("Court", courtSchema);