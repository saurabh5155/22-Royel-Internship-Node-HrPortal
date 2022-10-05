
const RoleModel = require("../model/role_model")

module.exports.addrole= function (req,res) {
    console.log(req.body.roleName)
    //error occor when two time call
    // res.json({
    //     msg:"Hello",
    //     status:200,
    //     data:req.body
    // })

    let role=new RoleModel({
        roleName:req.body.roleName
    })

    role.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Role is Added",status:200,data:success})
        }
    })
}   

module.exports.getAllRole=function(req,res){
    RoleModel.find(function(err,role){
        //role -> db --> select * from roles 
    //model 

    //REST 
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Roles are.....",status:200,data:role})
        }
    })
}

module.exports.getRoleById = function(req,res){

    var roleId = req.params.roleId;
    RoleModel.findById({"_id":roleId},function(err,role){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Roles are.....",status:200,data:role})
        }
    })
}

module.exports.deleteRole=function(req,res){

    let roleId = req.params.roleId
     //delete from role where roleId = 1 
        RoleModel.deleteOne({"_id":roleId},function(err,role){
        if(err){    
            console.log(err)
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"Role Deleted",status:200,data:role})
        }
    })
}

module.exports.upadateRole=function(req,res){
    let roleId=req.body.roleId
    let roleName=req.body.roleName

RoleModel.updateOne({"_id":roleId},{roleName:roleName},function(err,data){
    if(err){    
        console.log(err)
        res.json({msg:"Error",status:-1,data:err})
    }
    else{
        res.json({msg:"Role Updated",status:200,data:data})
    }
})

}