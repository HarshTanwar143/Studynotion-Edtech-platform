const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
        trim:true
    },
    lastName : {
        type:String,
        required:true,
        trim:true
    },
    email : {
        type:String,
        required:true,
        trim:true
    },
    password : {
        type:String,
        required:true,
    },
    accountType : {
        type:String,
        required:true,
        enum: ['Admin','Student','Instructor']
    },
    additionalDetails : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required:true
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress"
        }
    ],
    image:{
        type:String,
        required:true
    },
    token : {
        type : String
    },
    resetPasswordExpires : {
        type : Date
    },
    active : {
        type : Boolean,
        default : true,
    },
    approved : {
        type : Boolean,
        default : true,
    }
    // Add timestamps for when the document is created and last modified

},
{timestamps: true}
);

module.exports = mongoose.model("User",userSchema);