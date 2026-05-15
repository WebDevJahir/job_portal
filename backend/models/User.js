import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    }, 
    password: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }, 
    resume: {
        type:String,
        default: "",
    },
    resumePublicId: {
        type: String,
        default: ""
    },
    savedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }],
    savedInterviewQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "InterviewQuestion"
    }],
    savedRoleQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoleQuestion"
    }],
    isVerified:{
        type: Boolean,
        default:false
    },
    verificationOTP:String,
    verficationOTPExpires: Date,
    resetPasswordOTP: String,
    resetPasswordOTPExpires: Date,
}, {timestamps:true})

export default mongoose.model("User", userSchema);