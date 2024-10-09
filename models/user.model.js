import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{type:String},
    phone:{type:Number},
    email:{type:String},
    pincode:{type:Number},
    address1:{type:String},
    address2:{type:String},
    password:{type:String},  
    cpassword:{type:String} 
})

export default mongoose.Model.users||mongoose.model("user",userSchema)