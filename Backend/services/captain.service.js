import captainModel from "../models/captain.model.js";

export const createCaptain = async ({fullname, email, password, vehicle, location}) => {
    if(!fullname || !email || !password || !vehicle) {
        throw new Error("All required fields must be provided");
    }
    
    try {
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            console.log("Captain with this email already exists");
            throw new Error("Captain with this email already exists");
        }
    } catch (error) {
        console.log("Error in creating captain -> "+error.message);
        throw new Error("Error in creating captain -> "+error.message);
    }

    const captain = await captainModel.create({
        fullname : {
            firstname : fullname.firstname,
            lastname : fullname.lastname
        },
        email,
        password,
        vehicle : {
            color : vehicle.color,
            plate : vehicle.plate,
            capacity : vehicle.capacity,
            vehicleType : vehicle.vehicleType
        },
        location : location ? {
            latitude : location.latitude,
            longitude : location.longitude
        } : undefined,
        status : "inactive"
    });

    return captain;
}
