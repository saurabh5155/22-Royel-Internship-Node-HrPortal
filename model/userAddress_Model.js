const mongoose=require("mongoose")

let userAddressSchema= new mongoose.Schema({
    userAddress:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    pincode:{
        type:Number
    },

    // foreign
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

let userAddressModel=mongoose.model("userAddress",userAddressSchema)

module.exports =userAddressModel