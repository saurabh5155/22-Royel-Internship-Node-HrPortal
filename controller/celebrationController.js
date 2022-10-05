const celebrationModel=require("../model/celebration_Model")

module.exports.addCelebreation=function(req,res){
    let celebrationName=req.body.celebrationName
    let celebrationDate=req.body.celebrationDate
    let celebrationTime=req.body.celebrationTime
    let celebrationDiscreption=req.body.celebrationDiscreption
    let addressId=req.body.addressId
    let userId=req.body.userId

    let celebration=new celebrationModel({
        celebrationName:celebrationName,
        celebrationDate:celebrationDate,
        celebrationTime:celebrationTime,
        celebrationDiscreption:celebrationDiscreption,
        addressId:addressId,
        userId:userId
    })

    celebration.save(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({mas:"celebration Detail added",status:200,data:success})
        }
    })
}

module.exports.getAllCelebration=function(req,res){

    celebrationModel.find().populate("userId").populate("addressId").exec(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"celebration Detail are.....",status:200,data:success})
        }
    })
}

module.exports.getCelebrationById=function(req,res){
    let celebrationId=req.params.celebrationId

    celebrationModel.findById({"_id":celebrationId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"celebration Detail are.....",status:200,data:success})
        }
    })
}
module.exports.deleteCelebration=function(req,res){
    let celebrationId=req.params.celebrationId

    celebrationModel.deleteOne({"_id":celebrationId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"celebration Detail Deleted",status:200,data:success})
        }
    })
}

module.exports.updateCelebration=function(req,res){
    let celebrationId=req.body.celebrationId
    let celebrationName=req.body.celebrationName
    let celebrationDate=req.body.celebrationDate
    let celebrationTime=req.body.celebrationTime
    let celebrationDiscreption=req.body.celebrationDiscreption
    let addressId=req.body.addressId
    let userId=req.body.userId

    celebrationModel.updateOne({"_id":celebrationId},{celebrationName:celebrationName,celebrationDate:celebrationDate,celebrationTime:celebrationTime,celebrationDiscreption:celebrationDiscreption,addressId:addressId,userId:userId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"celebration Detail Updated",status:200,data:success})
        }
    })

}