import userModel from "../models/user.model.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
    try {
        // Get token from cookie or Authorization header
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
        
        if (!token) {
            return res.status(401).json({ message: "Unauthorized access - No token provided" });
        }

        // Check if token is blacklisted
        const isBlackListed = await blacklistTokenModel.findOne({ token });
        if (isBlackListed) {
            return res.status(401).json({ message: "Unauthorized - Token has been invalidated" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        // Find user
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "User does not exist" });
        }

        // Attach user to request
        req.user = user;
        return next();

    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token has expired" });
        }
        return res.status(401).json({ message: "Unauthorized" });
    }
}