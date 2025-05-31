import express from "express";
import {body} from "express-validator";
import {registerUser, loginUser} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",[
    body("fullname.firstname").notEmpty().isLength({min : 3, max : 30}).withMessage("First name is required with min 3 and max 30 characters"),
    body("email").notEmpty().isEmail().withMessage("Invalid email"),
    body("password").notEmpty().isLength({min : 4, max : 20}).withMessage("Password is required with min 4 and max 20 characters"),
], registerUser);

router.post("/login",[
    body("email").notEmpty().isEmail().isLength({min : 5 , max : 30}).withMessage("Invalid email"),
    body("password").notEmpty().isLength({min : 4, max : 20}).withMessage("Invalid password")
],loginUser);

export default router;
