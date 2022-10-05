const mongoose=require("mongoose")

// schema
let vacationSchema=new mongoose.Schema({
    startDate:{
        type:String
    },

    endDate:{
        type:String
    },

    vacationDiscreption:{
        type:String
    },

    // foreign Key

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

let vacationModel=mongoose.model("vacation",vacationSchema)
module.exports = vacationModel