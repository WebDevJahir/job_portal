import User from '../models/User.js'
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from '../utils/EmailService.js';
import jwt from "jsonwebtoken"

//to register a user

export const register = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;
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
        try{
            await sendVerificationEmail(email, name, verificationOTP);
        } catch(error){
            console.error("Error sending verification email:", error.message);
        }

        res.status(201).json({
            success: true,
            message: "User registered successfully. Please check your email for the verification code.",
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified
            }
        })
    } catch (error){
        console.error("Error registering user:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        if(!user.isVerified){
            return res.status(400).json({
                success: false,
                message: "Email not verified. Please verify your email before logging in."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "7d"});

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified
            }
        });
    } catch (error) {
        console.error("Error logging in user:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export const verifyEmail = async (req, res) => {
    try{
        const {email, otp} = req.body;
        const user = await User.findOne({email, verificationOTP: otp});

        if(!user){  
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }
        if(user.isVerified){
            return res.status(400).json({
                success: false,
                message: "Email already verified"
            });
        }

        if(user.verificationOTP !== otp || user.verificationOTPExpires < Date.now()){
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP"
            });
        }

        user.isVerified = true;
        user.verificationOTP = undefined;
        user.verificationOTPExpires = undefined;
        await user.save();
        res.status(200).json({
            success: true,
            message: "Email verified successfully"
        });
    }catch(error){
        console.error("Error verifying email:", error.message);
        res.status(500).json({  
            success: false,
            message: "Internal server error"
        });
    }
}

export const forgotPassword = async (req, res) => {
    try{
        const {email} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        const resetPasswordOTP = Math.floor(100000 + Math.random() * 900000).toString();
        const resetPasswordOTPExpires = Date.now() + 10 * 60 * 1000; // 10 mins 
        user.resetPasswordOTP = resetPasswordOTP;
        user.resetPasswordOTPExpires = resetPasswordOTPExpires;
        await user.save();
        //to send the reset password email
        try{
            await sendforgotPasswordEmail(email, user.name, resetPasswordOTP);
        } catch(error){
            console.error("Error sending reset password email:", error.message);
        }

        res.status(200).json({
            success: true,
            message: "Password reset OTP sent to email"
        });
    }catch(error){
        console.error("Error in forgot password:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export const resetPassword = async (req, res) => {
    try{
        const {email, otp, newPassword} = req.body;
        if(!email || !otp || !newPassword){
            return res.status(400).json({
                success: false,
                message: "Email, OTP and new password are required"
            });
        }
        const user = await User.findOne({email, resetPasswordOTP, resetPasswordOTPExpires: {$gt: Date.now()}});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        if(user.resetPasswordOTP !== otp || user.resetPasswordOTPExpires < Date.now()){
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP"
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetPasswordOTP = undefined;
        user.resetPasswordOTPExpires = undefined;
        await user.save();
        res.status(200).json({
            success: true,
            message: "Password reset successful"
        });
    }catch(error){
        console.error("Error in reset password:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}