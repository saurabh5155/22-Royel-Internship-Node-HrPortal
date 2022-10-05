const userDetailModel=require("../model/userdetail_Model")

module.exports.addUserDetail = function(req,res){
    let userName=req.body.userName
    let userSurname=req.body.userSurname
    let dateOfBirth= req.body.dateOfBirth
    let bloodGroup=req.body.bloodGroup
    let gender=req.body.gender
    let maritalStatus=req.body.maritalStatus
    let dateOfAnniversary=req.body.dateOfAnniversary
    let dateOfJoin=req.body.dateOfJoin
    let isActive=req.body.isActive
    let userId=req.body.userId

    let userDetail =new userDetailModel({
        userName:userName,
        userSurname:userSurname,
        dateOfBirth:dateOfBirth,
        bloodGroup:bloodGroup,
        gender:gender,
        maritalStatus:maritalStatus,
        dateOfAnniversary:dateOfAnniversary,
        dateOfJoin:dateOfJoin,
        isActive:isActive,
        userId:userId
    })

    userDetail.save(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({mas:"user Detail added",status:200,data:success})
        }
    })
}

module.exports.getAllUserDetail=function(req,res){
    
    userDetailModel.find().populate("userId").exec(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"user Detail are......",status:200,data:success})
        }
    })
}

module.exports.getUserDetailById= function(req,res){

    let userDetailId=req.params.userDetailId

    userDetailModel.findById({"_id":userDetailId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"user Detail are......",status:200,data:success})
        }
    })
}

module.exports.deleteUserDetail=function(req,res){
    let userDetailId=req.params.userDetailId
    userDetailModel.deleteOne({"_id":userDetailId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({mas:"user Detail Deleted",status:200,data:success})
        }
    })
}

module.exports.updateUserDetail=function(req,res){
    let userDetailId=req.body.userDetailId
    let userName=req.body.userName
    let userSurname=req.body.userSurname
    let dateOfBirth= req.body.dateOfBirth
    let bloodGroup=req.body.bloodGroup
    let gender=req.body.gender
    let maritalStatus=req.body.maritalStatus
    let dateOfAnniversary=req.body.dateOfAnniversary
    let dateOfJoin=req.body.dateOfJoin
    let isActive=req.body.isActive
    let userId=req.body.userId  

    userDetailModel.updateOne({"_id":userDetailId},{userName:userName,userSurname:userSurname,dateOfBirth:dateOfBirth,bloodGroup:bloodGroup,gender:gender,maritalStatus:maritalStatus,dateOfAnniversary:dateOfAnniversary,dateOfJoin:dateOfJoin,isActive:isActive,userId:userId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({mas:"user Detail Updated",status:200,data:success})
        }
    })
}