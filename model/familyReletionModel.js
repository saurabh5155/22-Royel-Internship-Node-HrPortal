const mongoose=require("mongoose");

//schema
let familyRelationSchema=new mongoose.Schema({

    relationName:{
        type:String
    }
})
// model
let familyRelationModel= mongoose.model("familyRelation",familyRelationSchema)

module.exports = familyRelationModel