import userModel from "../models/user.model.js";

export const createUser = async ({fullname, email, password}) => {
    if(!fullname || !email || !password) {
        throw new Error("All fields are required");
    }
    
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            console.log("User with this email already exists");
            throw new Error("User with this email already exists");
        }
    } catch (error) {
        console.log("Error in creating user -> "+error.message);
        throw new Error("Error in creating user -> "+error.message);
    }

    const user = await userModel.create({
        fullname : {
            firstname : fullname.firstname,
            lastname : fullname.lastname
        },
        email,
        password
    });

    return user;
}
