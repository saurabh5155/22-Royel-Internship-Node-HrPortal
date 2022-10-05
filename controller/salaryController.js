const salaryModel=require("../model/salary_Model")

module.exports.addSalary= function(req,res){
    let salaryValue=req.body.salaryValue
    let bonus=req.body.bonus
    let salaryDate=req.body.salaryDate
    let userId=req.body.userId

    let salary=new salaryModel({
        salaryValue:salaryValue,
        bonus:bonus,
        salaryDate:salaryDate,
        userId:userId
    })

    salary.save(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"salary added",status:200,data:success})
        }
    })
}

module.exports.getAllSalary=function(req,res){
    salaryModel.find().populate("userId").exec(function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"salary are.......",status:200,data:success})
        }
    })
}

module.exports.getSalaryById = function(req,res){
    let salaryId=req.params.salaryId
    
    salaryModel.findById({"_id":salaryId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"salary are......",status:200,data:success})
        }
    })
}

module.exports.deleteSalary=function(req,res){
    let salaryId=req.params.salaryId
    
    salaryModel.deleteOne({"_id":salaryId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"salary is Deleted",status:200,data:success})
        }
    })
}

module.exports.updateSalary=function(req,res){
    let salaryId=req.body.salaryId
    let salaryValue=req.body.salaryValue
    let bonus=req.body.bonus
    let salaryDate=req.body.salaryDate
    let userId=req.body.userId

    

    salaryModel.updateOne({"_id":salaryId},{ salaryId:salaryId,
        salaryValue:salaryValue,
        bonus:bonus,
        salaryDate:salaryDate,
        userId:userId},function(err,success){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"salary is Updated",status:200,data:success})
        }
    })
}