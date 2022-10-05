const mongoose=require("mongoose")

// schema
let celebrationSchema=new mongoose.Schema({
    celebrationName:{
        type:String
    },

    celebrationDate:{
        type:String
    },
    
    celebrationTime:{
        type:String
    },

    celebrationDiscreption:{
        type:String
    },
// foreign Key
    addressId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userAddress"
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})

let celebrationModel=mongoose.model("celebration",celebrationSchema)

module.exports = celebrationModel