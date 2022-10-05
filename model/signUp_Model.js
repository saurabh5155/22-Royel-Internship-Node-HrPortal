const mongoose=require("mongoose")


// Schema
let signupSchema=new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

let signupModel=mongoose.model("signup",signupSchema)
module.exports = signupModel