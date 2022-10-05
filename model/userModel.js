const mongoose=require("mongoose")

//schema
let userSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"roles"
    }
})

let userModel=mongoose.model("user",userSchema)

module.exports = userModel