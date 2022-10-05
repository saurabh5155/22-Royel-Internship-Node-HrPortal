const mongoose=require("mongoose")

// schema
let leaveSchema=new mongoose.Schema({
    leaveDate:{
        type:String
    },

    leaveReason:{
        type:String
    },

    leaveApprove:{
        type:Boolean
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})

let leaveModel=mongoose.model("leave",leaveSchema)
module.exports = leaveModel