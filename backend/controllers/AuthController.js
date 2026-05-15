import User from '../models/User.js'
import bcrypt from "bcryptjs"


//to register a user

export const register = async (req, res) => {
    try{
        const {name, email, password, otp} = req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userRole = role || "user";

        //to generate 6 digits OTP
        const verificationOTP = Math.floor(100000 + Math.random() * 900000).toString();
        const verificationOTPExpires = Date.now() + 10 * 60 * 1000 // 10 mins

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: userRole,
            verificationOTP,
            verificationOTPExpires
        })

        //to send the verification email
    } catch (error){

    }
}