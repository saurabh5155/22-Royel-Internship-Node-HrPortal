const signupModel = require("../model/signUp_Model")
const bcrypt = require("bcrypt")



module.exports.addSignup = function (req, res) {
    let userName = req.body.userName
    let email = req.body.email
    let password = req.body.password

    let encPassword = bcrypt.hashSync(password, 5)

    let signup = new signupModel({
        userName: userName,
        email: email,
        password: encPassword
    })

    signup.save(function (err, success) {
        if (err) {
            res.json({ msg: "Error", status: -1, data: err })
        }
        else {
            res.json({ msg: "SignUp added", status: 200, data: success })
        }
    })
}

module.exports.getAllSignup = function (req, res) {

    signupModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deleteSignup = function (req, res) {
    let signupId = req.params.signupId

    signupModel.deleteOne({ "_id":signupId},function(err,success) {
        if (err) {
            res.json({ msg: "Error", status: -1, data: err })
        }
        else {
            res.json({ msg: "SignUp user are......", status: 200, data: success })
        }
    })
}

module.exports.login=function(req,res){
    let param_email=req.body.email
    let param_password=req.body.password

    let isCorrect=false

    signupModel.findOne({email:param_email},function(err,success){
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