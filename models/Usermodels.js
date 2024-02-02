import mongoose from "mongoose";

const validateEmail = (e) => {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(e);
  };


const userSchema = new mongoose.Schema(
    {
        firstname:{type: String },
        lastName: {type: String, required:[true,'Last Name is required']},
        email:{type: String, required:[true,'Email is required'],validate: validateEmail,},
        password: { type: String, required: [true, "Password is required"] },
    status: { type: Boolean, default: true },
    role: { type: String, default: "customer" },
    createdAt: { type: Date, default: Date.now() },
    resetPasswordOtp: { type: Number },
    resetPasswordExpires: { type: Date },
    },
    {
        collection:'Users',
        versionKey: false,
    }
   
)

const userModel = mongoose.model('Users', userSchema)
export default userModel;