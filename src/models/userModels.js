import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userSchema:{
        type:String,
        required:[true,"please provide a name"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"please provide a email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"please provide a password"],
        unique:true,
    },
    isVerfied:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:String,
    verifyToken:String,
    verifyTokenExpiry:String,
})
const User=mongoose.model("users",userSchema)
export default User