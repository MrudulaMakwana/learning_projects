import mongoose from "mongoose";

export function connectDB(){
    mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Mongodb Connected");

}).catch((e) => {
    console.log(e);
})
}