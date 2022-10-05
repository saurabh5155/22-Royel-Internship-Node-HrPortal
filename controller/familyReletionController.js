const familyRelationModel=require("../model/familyReletionModel")

// add
module.exports.addFamilyRelation=function(req,res){
    let relationName=req.body.relationName

    let familyRelation=familyRelationModel({
        relationName:relationName
    })

    familyRelation.save(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Family Details Are Added",status:200,data:success})
        }
    })
}

// getalldata

module.exports.getAllFamilyRelation=function(req, res) {

   familyRelationModel.find(function(err,success){
    if(err){
        res.json({msg:"Error",status:-1,data:err})
    }
    else{
        res.json({msg:"Family Details Are........",status:200,data:success})
    }
   })
}

module.exports.getFamilyRelationById=function(req,res){

    let familyRelationId=req.params.familyRelationId
    
    familyRelationModel.findById({"_id":familyRelationId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Family Details Are........",status:200,data:success})
        }
    })
}

// delete family relation
module.exports.deleteFamilyRelation=function(req,res){

    let familyRelationId=req.params.familyRelationId

    familyRelationModel.deleteOne({"_id":familyRelationId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"FamilyDetails Are Deleted",status:200,data:success})
        }
    })
}

module.exports.updateFamilyRelation=function(req,res){
    let familyRelationId=req.body.familyRelationId
    let relationName=req.body.relationName

    familyRelationModel.updateOne({"_id":familyRelationId},{relationName:relationName},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Family Details Are Updated",status:200,data:success})
        }
    })
}
