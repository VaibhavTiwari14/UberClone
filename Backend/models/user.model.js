import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname : {
        firstname : {
            type : String,
            required : [true, "First name is required"],
            minlength : [3, "First name must be at least 3 characters long"],
            maxlength : [30, "First name must be less than 30 characters"],
        },
        lastname : {
            type : String,
            minlength : [3, "Last name must be at least 3 characters long"],
            maxlength : [30, "Last name must be less than 30 characters"],
        }
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        minlength : [5, "Email must be at least 5 characters long"],
        maxlength : [30, "Email must be less than 30 characters"],
        unique : true,
    },
    password : {
        type : String,
        required : [true, "Password is required"],
        select : false
    },
    socketId : {
        type : String,
    }
}, {timestamps : true});

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({_id : this._id}, process.env.JWT_SECRET_KEY, {expiresIn : process.env.JWT_SECRET_KEY_EXPIRY});
}

userSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
}

const userModel = mongoose.model("User", userSchema);

export default userModel;
