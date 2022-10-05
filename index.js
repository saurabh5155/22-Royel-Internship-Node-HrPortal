const express = require("express")
const mongoose=require("mongoose")


//sessioncotroller
const sessionController = require("./controller/session-controller")

//role controller
const roleController=require("./controller/role_controller")

// user Address
const userAddressController=require("./controller/userAddress_controller")



// user
const user=require("./controller/userContrller")
const userModel = require("./model/userModel")

// userDetail
const userdetail=require("./controller/userDetailController") 

// familyRelation
const familyRelation=require("./controller/familyReletionController")

// familyDetail
const familyDetail=require("./controller/familyController")

// celebration
const celebration=require("./controller/celebrationController")

// vacation
const vacation=require("./controller/vacationController")

// salary
const salary=require("./controller/salaryController")

// leave
const leave=require("./controller/leaveController")

// signup Encrypted
const signupenc=require("./controller/signUp_Controller")


const app = express()

// cors
var cors=require("cors")
app.use(cors())

//middle ware
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  

//for mongoose
mongoose.connect('mongodb://localhost:27017/Hr_Portal',function(err){
    if(err){
        console.log("Error ...... mongoDB is not connected")
        console.log(err);
    }
    else{
        console.log("MongoDB is connected")
    }
})



// get method calling
app.get("/",function (req, res) {
        res.write("Wlcome.............")
        res.end()
    })
//session controller
app.get("/login", sessionController.login)
app.get("/signup", sessionController.signup)
app.post("/saveuser",sessionController.saveuser)


//role
app.post("/roles", roleController.addrole)
app.get("/roles",roleController.getAllRole)
app.get("/roles/:roleId",roleController.getRoleById)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.upadateRole)

// userAddress
app.post("/userAddress",userAddressController.addUserAddress)
app.get("/userAddress",userAddressController.getAllUserAddress)
app.get("/userAddress/:userAddressId",userAddressController.getUserAddressById)
app.delete("/userAddress/:userAddressId",userAddressController.deleteUserAddress)
app.put("/userAddress",userAddressController.updateUserAddress)



// user
app.post("/user",user.addUser)
app.get("/user",user.getAllUser)
app.get("/user/:userId",user.getUserById)
app.delete("/user/:userId",user.deleteUser)
app.put("/user",user.updateUser)
app.post("/login",user.login)

// userDetail
app.post("/userDetail",userdetail.addUserDetail)
app.get("/userDetail",userdetail.getAllUserDetail)
app.get("/userDetail/:userDetailId",userdetail.getUserDetailById)
app.delete("/userDetail/:userDetailId",userdetail.deleteUserDetail)
app.put("/userDetail",userdetail.updateUserDetail)

// familyRelation
app.post("/familyRelation",familyRelation.addFamilyRelation)
app.get("/familyRelation",familyRelation.getAllFamilyRelation)
app.get("/familyRelation/:familyRelationId",familyRelation.getFamilyRelationById)
app.delete("/familyRelation/:familyRelationId",familyRelation.deleteFamilyRelation)
app.put("/familyRelation",familyRelation.updateFamilyRelation)

// familyDetail
app.post("/familyDetail",familyDetail.addFamilyDetail)
app.get("/familyDetail",familyDetail.getAllFamilyDetail)
app.get("/familyDetail/:familyDetailId",familyDetail.getFamilyDetailById)
app.delete("/familyDetail/:familyDetailId",familyDetail.deleteFamilyDetail)
app.put("/familyDetail",familyDetail.updateFamilyDetail)

// celebration
app.post("/celebration",celebration.addCelebreation)
app.get("/celebration",celebration.getAllCelebration)
app.get("/celebration/:celebrationId",celebration.getCelebrationById)
app.delete("/celebration/:celebrationId",celebration.deleteCelebration)
app.put("/celebration",celebration.updateCelebration)

//vacation
app.post("/vacation",vacation.addVacation)
app.get("/vacation",vacation.getAllVacation)
app.get("/vacation/:vacationId",vacation.getVacationById)
app.delete("/vacation/:vacationId",vacation.deleteVacation)
app.put("/vacation",vacation.updateVacation)

//salary 
app.post("/salary",salary.addSalary)
app.get("/salary",salary.getAllSalary)
app.get("/salary/:salaryId",salary.getSalaryById)	
app.delete("/salary/:salaryId",salary.deleteSalary)
app.put("/salary",salary.updateSalary)

// leave
app.post("/leave",leave.addLeave)
app.get("/leave",leave.getAllLeave)
app.get("/leave/:leaveId",leave.getLeavebyId)
app.delete("/leave/:leaveId",leave.deleteLeave)
app.put("/leave",leave.updateLeave)

// signUp
// app.post("/signupenc",signupenc.addSignup)
// app.get("/signupenc",signupenc.getAllSignup)
// app.delete("/signupenc/:signupId",signupenc.deleteSignup)


//server
app.listen(4000, function () {
    console.log("Server is Started On port No. 4000");
})