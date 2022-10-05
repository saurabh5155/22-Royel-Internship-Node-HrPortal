const mongoose=require("mongoose")

// schema
let salarySchema=new mongoose.Schema({
    salaryValue:{
        type:Number
    },

    bonus:{
        type:Number
    },

    salaryDate:{
        type:String
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

let salaryModel=mongoose.model("salary",salarySchema)

module.exports = salaryModel