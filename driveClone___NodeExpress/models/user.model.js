import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:
        { type: String, required: true, trim: true, lowercase: true, unique: true, minlength: [3, "Username must be at least 3 character long"] },
    email:
        { type: String, required: true, trim: true, lowercase: true, unique: true, minlength: [10, "Username must be at least 10 character long"] },
    password:
        { type: String, required: true, trim: true, lowercase: true, unique: true, minlength: [5, "Username must be at least 5 character long"] }
})


export const userModel = new mongoose.model("user", userSchema);