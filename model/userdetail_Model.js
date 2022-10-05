const mongoose=require("mongoose")

// schema

let userDetailSchema=new mongoose.Schema({
    

    userSurname:{
        type:String
    },
    
    dateOfBirth:{
        type:String
    },

    bloodGroup:{
        type:String
    },

    gender:{
        type:String
    },

    maritalStatus:{
        type:Boolean
    },

    dateOfAnniversary:{
        type:String
    },

    dateOfJoin:{
        type:String
    },

    isActive:{
        type:Boolean
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

let userDetailModel = mongoose.model("userDetail",userDetailSchema)

module.exports = userDetailModel