const mongoose=require("mongoose")

// schema
let familyDetailSchema=new mongoose.Schema({
    relativeName:{
        type:String
    },

    relativeDOB:{
        type:String
    },

    relativeContactNO:{
        type:Number
    },

    gender:{
        type:String
    },
// foreign keys
    familyRelationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"familyRelation"
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

let familyDetailModel=mongoose.model("familyDetail",familyDetailSchema)

module.exports = familyDetailModel