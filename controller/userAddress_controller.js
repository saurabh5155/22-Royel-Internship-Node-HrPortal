const userAddressModel=require("../model/userAddress_Model")

module.exports.addUserAddress=function(req,res){
    console.log(req.body.userAddress)
    console.log(req.body.city)
    console.log(req.body.state)
    console.log(req.body.pincode)
    console.log(req.body.userId)

    let userAddress=userAddressModel({
        userAddress:req.body.userAddress,
        city:req.body.city,
        state:req.body.state,
        pincode:req.body.pincode,
        userId:req.body.userId
    })

    userAddress.save(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"user Address is Added",status:200,data:success})
        }
    })
}

module.exports.getAllUserAddress=function(req,res){
    userAddressModel.find().populate("userId").exec(function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"user Address is...........",status:200,data:success})
        }
    })
}

module.exports.getUserAddressById= function(req,res){
    let userAddressId=req.params.userAddressId
    userAddressModel.findById({"_id":userAddressId},function(err,success){
        if(err){
            console.log(err)
            res.json({msg:"Error",status:-1,data:req.body})
        }
        else{
            res.json({msg:"user Address is...........",status:200,data:success})
        }
    })
}

module.exports.deleteUserAddress= function(req,res){

    let userAddressId= req.params.userAddressId
    userAddressModel.deleteOne({"_id":userAddressId}, function (err, success)  {
            if (err) {
                console.log(err)
                res.json({ msg: "Error", status: -1, data: req.body })
            }
            else {
                res.json({ msg: "user Address is Deleted", status: 200, data: success })
            }
        })
}

module.exports.updateUserAddress= function(req,res){
    let userAddressId=req.body.userAddressId
    let userAddress=req.body.userAddress
    let state=req.body.state
    let city=req.body.city
    let pincode=req.body.pincode

    userAddressModel.updateOne({"_id":userAddressId},{userAddress:userAddress,state:state,city:city,pincode:pincode},function(err,success){
        if (err) {
            console.log(err)
            res.json({ msg: "Error", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "user Address is updated", status: 200, data: success })
        }
    })
}
