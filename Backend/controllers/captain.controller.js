import blacklistTokenModel from "../models/blacklistToken.model.js";
import captainModel from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res
               .status(400)
               .json({
                errors : errors.array()
               });
    }

    const {fullname, email, password, vehicle, location} = req.body;

    try {
        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await createCaptain({
            fullname,
            email,
            password: hashedPassword,
            vehicle,
            location
        });

        const token = captain.generateAuthToken();

        const captainData = {
            _id: captain._id,
            fullname: captain.fullname,
            email: captain.email,
            vehicle: captain.vehicle,
            status: captain.status,
            token: token
        }

        console.log("Captain created successfully -> "+captainData.fullname.firstname+" "+captainData.fullname.lastname);
        res.status(201).json({captain: captainData});
    } catch (error) {
        if (error.message === "Captain with this email already exists") {
            return res.status(409).json({
                errors: [{
                    msg: "An account with this email already exists. Please use a different email or try logging in."
                }]
            });
        }
        next(error);
    }
}

export const loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res
        .status(400)
        .json({
         errors : errors.array()
        });
    }

    const {email, password} = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");

    if(!captain){
        return res
               .status(401)
               .json({message : "Invalid Email or Password"}); 
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res
               .status(401)
               .json({message : "Password does not match"});
    }

    const token = await captain.generateAuthToken();

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    });

    console.log("Captain Logged In!! Captain: "+captain.fullname.firstname);

    res.status(200).json({
        token,
        captain: {
            _id: captain._id,
            fullname: captain.fullname,
            email: captain.email,
            vehicle: captain.vehicle,
            status: captain.status
        }
    });
}

export const getCaptainProfile = async(req, res) => {
    return res
           .status(200)
           .json({
            captain : req.captain
           });
}

export const logoutCaptain = async(req, res) => {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await blacklistTokenModel.create({
        token
    });
    console.log("Captain Logged Out!! Captain: "+req.captain.fullname.firstname);
    res.clearCookie('token');
    res
    .status(200)
    .json({
        message : "Captain Logged-out!!"
    })
}