
import userSchema from "./models/user.model.js"
import bcrypt from "bcrypt"
import pkg from "jsonwebtoken"
const {sign}= pkg


// register
// data
export async function register(req,res){
    const {username,phone,email,address1,address2,pincode,password,cpassword}=req.body
    console.log(req.body);
// valid
    if(!(username&&phone&&email&&address1&&address2&&pincode&&password&&cpassword))
        return res.status(404).send({msg:"fileds are empty"})
// // checkemail
//     const user=await userSchema.findOne({email})
//     if(user)
//         return res.status(404).send({msg:"email already exit"})

//     if(password!==cpassword)
//         return res.status(404).send({msg:"password doesn't match"})
//     bcrypt.hash(password,10).then(async(hashedPassword)=>{
//         console.log(hashedPassword);
//         await userSchema.create({username,email,password:hashedPassword}).then(()=>{
//             res.status(201).send({msg:"successfully registered"})
//         }).catch((error)=>{
//             return res.status(404).send({msg:"registeration cancelled"})
//         })
//     }).catch((error)=>{
//         return res.status(404).send({msg:error})
//     })
}



