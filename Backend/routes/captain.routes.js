import express from "express";
import { body } from "express-validator";
import { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } from "../controllers/captain.controller.js";
import { authCaptain } from "../middlewares/auth.middleware.js";

const captainRouter = express.Router();

// Register route
captainRouter.post("/register", [
    body("fullname.firstname")
        .notEmpty().withMessage("First name is required")
        .isLength({ min: 3, max: 30 }).withMessage("First name must be between 3 and 30 characters"),
    
    body("fullname.lastname")
        .optional()
        .isLength({ min: 3, max: 30 }).withMessage("Last name must be between 3 and 30 characters"),

    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Please enter a valid email")
        .isLength({ min: 5, max: 30 }).withMessage("Email must be between 5 and 30 characters"),

    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 4, max: 20 }).withMessage("Password must be between 4 and 20 characters"),

    body("vehicle.color")
        .notEmpty().withMessage("Vehicle color is required")
        .isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),

    body("vehicle.plate")
        .notEmpty().withMessage("Vehicle plate is required")
        .isLength({ min: 3 }).withMessage("Plate must be at least 3 characters long"),

    body("vehicle.capacity")
        .notEmpty().withMessage("Vehicle capacity is required")
        .isInt({ min: 1 }).withMessage("Capacity must be at least 1"),

    body("vehicle.vehicleType")
        .notEmpty().withMessage("Vehicle type is required")
        .isIn(["car", "motorcycle", "auto"]).withMessage("Vehicle type must be car, motorcycle, or auto"),

    body("location.latitude")
        .optional()
        .isFloat().withMessage("Latitude must be a valid number"),

    body("location.longitude")
        .optional()
        .isFloat().withMessage("Longitude must be a valid number")
], registerCaptain);

// Login route
captainRouter.post("/login", [
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Please enter a valid email"),
    body("password")
        .notEmpty().withMessage("Password is required")
], loginCaptain);

// Get profile route (protected)
captainRouter.get("/profile", authCaptain, getCaptainProfile);

// Logout route (protected)
captainRouter.post("/logout", authCaptain, logoutCaptain);

export default captainRouter;