const fs =require("fs")//fs=file system

function login(req,res){
  //  let loginHtml=fs.readFileSync("./views/login.html")
    res.write("login")
    res.end()
}
function signup(req,res){
    let signHtml = fs.readFileSync("./views/signup.html")
    res.write(signHtml)
    res.end()
}

function saveUser(req,res){

    console.log(req.body)//for print the req

    //this is for the res in json . the json is the massage between {}
    res.json({
        msg:"done danadone....",
        status:200,
        data:req.body
    })
}


module.exports.login = login
module.exports.signup= signup
module.exports.saveuser=saveUser