const vacationModel = require("../model/vacation_Model")

module.exports.addVacation=function(req,res){
    let startDate=req.body.startDate
    let endDate=req.body.endDate
    let vacationDiscreption=req.body.vacationDiscreption
    let userId=req.body.userId

    let vacation=new vacationModel({
        startDate:startDate,
        endDate:endDate,
        vacationDiscreption:vacationDiscreption,
        userId:userId
    })

    vacation.save(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"vacation added",status:200,data:success})
        }
    })
}

module.exports.getAllVacation=function(req,res){

    vacationModel.find().populate("userId").exec(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"vacation are......",status:200,data:success})
        }
    })
}

module.exports.getVacationById=function(req,res){
    let vacationId=req.params.vacationId

vacationModel.findById({"_id":vacationId},function(err,success){
    if(err){
        res.json({msg:"Error",status:-1,data:err})
    }
    else{
        res.json({msg:"vacation are......",status:200,data:success})
    }
})
}
module.exports.deleteVacation=function(req,res){
    let vacationId=req.params.vacationId

    vacationModel.deleteOne({"_id":vacationId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"vacation are Deleted",status:200,data:success})
        }
    })
}

module.exports.updateVacation=function(req,res){
    let vacationId=req.body.vacationId
    let startDate=req.body.startDate
    let endDate=req.body.endDate
    let vacationDiscreption=req.body.vacationDiscreption
    let userId=req.body.userId

    vacationModel.updateOne({"_id":vacationId},{startDate:startDate,
        endDate:endDate,
        vacationDiscreption:vacationDiscreption,
        userId:userId},function(err,success){
            if(err){
                res.json({msg:"Error",status:-1,data:err})
            }
            else{
                res.json({msg:"vacation are Upadated",status:200,data:success})
            }
        })
}