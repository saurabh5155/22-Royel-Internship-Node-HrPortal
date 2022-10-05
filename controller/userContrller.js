const userModel=require("../model/userModel")
const bcrypt = require('bcrypt')

module.exports.addUser= function(req,res){
    let firstName= req.body.firstName
    let email=req.body.email
    let password=req.body.password
    let roleId=req.body.roleId

    let encPassword = bcrypt.hashSync(password,5)

    let user = new userModel({
        firstName:firstName,
        email:email,
        password:encPassword,
        roleId:roleId
    })

    user.save(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({mas:"user added",status:200,data:success})
        }
    })
}

module.exports.getAllUser=function(req,res){
    
    userModel.find().populate("roleId").exec(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"user are........",status:200,data:success})
        }
    })
}

module.exports.getUserById= function(req,res){

    let userId=req.params.userId

    userModel.findById({"_id":userId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"user are........",status:200,data:success})
        }
    })
}

module.exports.deleteUser=function(req,res){
    let userId= req.params.userId

    userModel.deleteOne({"_id":userId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({mas:"user deleted........",status:200,data:success})
        }
    })


}

module.exports.updateUser=function(req,res){
    let userId=req.body.userId
    let firstName=req.body.firstName
    let email=req.body.email
    let password=req.body.password
    let roleId=req.body.roleId

    userModel.updateOne({"_id":userId},{userId:userId,firstName:firstName,email:email,password:password,roleId:roleId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({mas:"user Upadted",status:200,data:success})
        }
    })
}


module.exports.login=function(req,res){
    let param_email=req.body.email
    let param_password=req.body.password

    let isCorrect=false

    userModel.findOne({email:param_email}).populate("roleId").exec(function(err,success){
        if(success){
            let ansPassword=bcrypt.compareSync(param_password,success.password)
            if(ansPassword==true){
                isCorrect=true
            }
        }

        if(isCorrect==true){
            if (err) {
                res.json({ msg: "Invalide Email & Password", status: -1, data: err })
            }
            else {
                res.json({ msg: "Login Successfull", status: 200, data: success })
            }   
        }
    })
}