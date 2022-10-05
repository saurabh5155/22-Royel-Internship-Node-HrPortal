const leaveModel=require("../model/leave_Model")

module.exports.addLeave=function(req,res){
    let leaveDate=req.body.leaveDate
    let leaveReason=req.body.leaveReason
    let leaveApprove=req.body.leaveApprove
    let userId=req.body.userId

    let leave=new leaveModel({
        leaveDate:leaveDate,
        leaveReason:leaveReason,
        leaveApprove:leaveApprove,
        userId:userId
    })

    leave.save(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Leave Is Added",status:200,data:success})
        }
    })
}

module.exports.getAllLeave=function(req,res){
    leaveModel.find().populate("userId").exec(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Leave are......",status:200,data:success})
        }
    })
}

module.exports.getLeavebyId = function(req,res){

    let leaveId = req.params.leaveId

    leaveModel.findById({_id:leaveId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Leave are......",status:200,data:success})
        }
    })
}

module.exports.deleteLeave=function(req,res){
    let leaveId=req.params.leaveId
    leaveModel.deleteOne({"_id":leaveId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Leave is Deleted",status:200,data:success})
        }
    })
}

module.exports.updateLeave=function(req,res){
    let leaveId=req.body.leaveId
    let leaveDate=req.body.leaveDate
    let leaveReason=req.body.leaveReason
    let leaveApprove=req.body.leaveApprove
    let userId=req.body.userId

    leaveModel.updateOne({"_id":leaveId},{leaveDate:leaveDate,
        leaveReason:leaveReason,
        leaveApprove:leaveApprove,
        userId:userId},function(err,success){
            if(err){
                res.json({msg:"Error",status:-1,data:err})
            }
            else{
                res.json({msg:"Leave is Updated",status:200,data:success})
            }
        })

}