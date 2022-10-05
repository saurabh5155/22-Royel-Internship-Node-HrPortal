

const familyDetailModel = require("../model/family_Model")


module.exports.addFamilyDetail=function(req,res){
    let relativeName=req.body.relativeName
    let relativeDOB=req.body.relativeDOB
    let relativeContactNO=req.body.relativeContactNO
    let gender=req.body.gender
    let familyRelationId=req.body.familyRelationId
    let userId=req.body.userId

    let familyDetail=familyDetailModel({
        relativeName:relativeName,
        relativeDOB:relativeDOB,
        relativeContactNO:relativeContactNO,
        gender:gender,
        familyRelationId:familyRelationId,
        userId:userId
    })

    familyDetail.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Family Detail is Added",status:200,data:success})
        }
    })
}



module.exports.getAllFamilyDetail=function(req,res){
    familyDetailModel.find().populate("familyRelationId").populate("userId").exec(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Family Detail are........",status:200,data:success})
        }
    })
}

module.exports.getFamilyDetailById = function(req,res){
    let familyDetailId= req.params.familyDetailId
    familyDetailModel.findById({"_id":familyDetailId},function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Family Detail are........",status:200,data:success})
        }
    })
}

module.exports.deleteFamilyDetail=function(req,res){
    let familyDetailId=req.params.familyDetailId

    familyDetailModel.deleteOne({"_id":familyDetailId},function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Family Detail is Deleted",status:200,data:success})
        }
    })
}

module.exports.updateFamilyDetail=function(req,res){
    let familyDetailId=req.body.familyDetailId
    let relativeName=req.body.relativeName
    let relativeDOB=req.body.relativeDOB
    let relativeContactNO=req.body.relativeContactNO
    let gender=req.body.gender
    let familyRelationId=req.body.familyRelationId
    let userId=req.body.userId

    familyDetailModel.updateOne({"_id":familyDetailId},{relativeName:relativeName,relativeDOB:relativeDOB,relativeContactNO:relativeContactNO,gender:gender,familyRelationId:familyRelationId,userId:userId},function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Family Detail Upadated",status:200,data:success})
        }
    })
}