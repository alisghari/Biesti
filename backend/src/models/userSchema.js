import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: { type:String },
    surname: { type:String },
    dateofbirth: {type:String } ,
    email:{type:String },
    phonenumber:{type:String },
    password:{type:String, minlength: 6 }

});



export const User = mongoose.model("userSchema", userSchema);