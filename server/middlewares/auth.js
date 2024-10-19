const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Authentication Middleware
exports.auth = async (req, res, next) => {
    try {
        // Fetch the token
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'Token Not Found',
            });
        }
        console.log("Token: ", token);

        // Validate the token
        try {
            const result = await jwt.verify(token, process.env.JWT_SECRET); // it returns payload
            console.log("payload :: ", result);
            req.user = result;
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: 'Token is invalid',
            });
        }

        next();
    } catch (error) {
        console.error("Authentication Failed, ", error);
        return res.status(500).json({
            success: false,
            message: 'User Not Authenticated, Please try again',
        });
    }
};

// IsStudent Middleware
exports.isStudent = async (req, res, next) => {
    try {
        if (!req.user || req.user.accountType !== "Student") {
            return res.status(400).json({
                success: false,
                message: 'This protected route is only for Students...',
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again!!!',
        });
    }
};

// IsInstructor Middleware
exports.isInstructor = async (req, res, next) => {
    try {
        if (!req.user || req.user.accountType !== "Instructor") {
            return res.status(400).json({
                success: false,
                message: 'This protected route is only for Instructors...',
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again!!!',
        });
    }
};

// IsAdmin Middleware
exports.isAdmin = async (req, res, next) => {
    try {
        if (!req.user || req.user.accountType !== "Admin") {
            return res.status(400).json({
                success: false,
                message: 'This protected route is only for Admins...',
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again!!!',
        });
    }
};
