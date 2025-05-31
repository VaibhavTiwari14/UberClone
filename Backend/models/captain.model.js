import mongoose from "mongoose";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
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
        match : [/^\S+@\S+\.\S+$/,"Please enter a valid email"]
    },
    password : {
        type : String,
        required : [true, "Password is required"],
        select : false
    },
    socketId : {
        type : String,
    },
    status : {
        type : String,
        enum : ["active","inactive"],
        default : "inactive"
    },
    vehicle : {
        color : {
            type : String,
            required : true,
            minLength : [3 , "Color must be at least 3 characters long"]
        },
        plate : {
            type : String,
            required : true,
            minLength : [3,"Plate must be at least 3 characters long"]
        },
        capacity : {
            type : Number,
            required : true,
            min : [1,"Capacity must be at least 1"]
        },
        vehicleType : {
            type : String,
            required : true,
            enum : ["car","motorcycle","auto"]
        }
    },
    location : {
        latitude : {
            type : Number
        },
        longitude : {
            type : Number
        }
    }
}, { timestamps : true });

captainSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({
        _id : this._id
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn : procecc.env.JWT_SECRET_KEY_EXPIRY
    }
    );
    return token;
}

captainSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(this.password,password);
}

captainSchema.statics.hashPassword = async () => {
    return bcrypt.hash(password,10);
}

const captainModel = mongoose.model("Captain",captainSchema);

export default captainModel;



