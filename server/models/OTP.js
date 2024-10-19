const mongoose = require("mongoose");
const { mailSender } = require("../utils/mailSender");
const emailTemplate = require("../mail/template/emailVerificationTemplate");


const OtpSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now,
        expires : 5*60
    },
    otp : {
        type : String,
        required : true,
    }
});

async function sendVerificationEmail(email,otp){
    try{
        console.log("inside send verification func.");
        const mailResponse = await mailSender(email,'Verification Email from StudyNotion ',emailTemplate(otp));
        console.log('Email Sent Successfully: ',mailResponse.response);
    }
    catch(e){
        console.error('Error Occured While Sending mails : ',e);
        throw e;
    }
}

OtpSchema.pre("save",async function(next){
    console.log("New document saved to database");


    // Only send an email when a new document is created
    if(this.isNew){
        await sendVerificationEmail(this.email,this.otp);
    }
    next();
});


module.exports = mongoose.model("OTP",OtpSchema);


























