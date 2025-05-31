import blacklistTokenModel from "../models/blacklistToken.model.js";
import userModel from "../models/user.model.js";
import {createUser} from "../services/user.service.js";
import { validationResult } from "express-validator";

export const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res
               .status(400)
               .json({
                errors : errors.array()
               });
    }

    const {fullname, email, password} = req.body;

    try {
        const hashedPassword = await userModel.hashPassword(password);

        const user = await createUser({
            fullname,
            email,
            password : hashedPassword
        });

        const token = user.generateAuthToken();

        const userData = {
            _id : user._id,
            fullname : user.fullname,
            email : user.email,
            token : token
        }

        console.log("user created successfully -> "+userData.fullname.firstname+" "+userData.fullname.lastname);
        res.status(201).json({user : userData});
    } catch (error) {
        if (error.message === "User with this email already exists") {
            return res.status(409).json({
                errors: [{
                    msg: "An account with this email already exists. Please use a different email or try logging in."
                }]
            });
        }
        next(error);
    }
}

export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res
        .status(400)
        .json({
         errors : errors.array()
        });
    }

    const {email , password} = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if(!user){
        return res
               .status(401)
               .json({message : "Invalid Email or Password"}); 
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res
               .status(401)
               .json({message : "Password does not match"});
    }

    const token = await user.generateAuthToken();

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    console.log("User Logged In!! User: "+user.fullname.firstname);

    res.status(200).json({
        token,
        user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        }
    });
}

export const getUserProfile = async(req, res) => {
    return res
           .status(200)
           .json(req.user);
}

export const logoutUser = async(req, res) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await blacklistTokenModel.create({
        token
    });

    res
    .status(200)
    .json({
        message : "User Logged-out!!"
    })
}
