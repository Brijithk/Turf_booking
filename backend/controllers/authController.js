// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");


const otpStore = {}; // Temporary storage

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required",
            });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);

        otpStore[email] = otp;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Email Verification OTP",
            text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
        });

        res.json({
            success: true,
            message: "OTP sent successfully",
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Failed to send OTP",
        });
    }
};

exports.verifyOtp = async (req, res) => {

    const { email, otp } = req.body;

    if (!otpStore[email]) {
        return res.status(400).json({
            message: "OTP not found"
        });
    }

    if (Number(otp) !== otpStore[email]) {
        return res.status(400).json({
            message: "Invalid OTP"
        });
    }

    delete otpStore[email];

    res.json({
        success: true,
        message: "OTP Verified Successfully"
    });

};

exports.registerUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            success: true,
            message: "Registration Successful"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password",
            });
        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server Error",
        });
    }
};