const User = require("../models/User");
const {mailSender} = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");


// SENDING LINK TO MAIL
exports.resetPasswordToken = async (req,res) => {
    try{
        // fetch the data
        const email = req.body.email;

        // check user for this email, and email verification
        const user = await User.findOne({email:email});
        if(!user){
            return res.json({
                success : false,
                message : 'Your Email is not registered with us'
            })
        }

        // generate token - by crypto
        const token = crypto.randomUUID();

        // update user by adding token and expiration time
        const updatedDetails = await User.findOneAndUpdate(
                                                    {email : email},
                                                    {
                                                        token : token,
                                                        resetPasswordExpires:Date.now() + 5*60*1000
                                                    },
                                                    {new : true}
        );

        // create url
        const url = `http://localhost:3000/update-password/${token}`;

        // send mail containing url
        await mailSender(email,"Password Reset Link",`Your Link for email verification is ${url}. Please click this url to reset your password.`);

        // return response
        return res.json({
            success : true,
            message : 'Email sent successfully, please check email and change password'
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success : false,
            message : 'Something Went Wrong!!! try again'
        })
    }
};


// UPDATE DETAILS IN DATABASE
exports.resetPassword = async (req,res) => {
    try{
        // fetch the data
        const {password,confirmPassword,token} = req.body;

        // validation
        if(password !== confirmPassword){
            return res.status(400).json({
                success : false,
                message : 'passwords not matched'
            })
        }

        // get user details by using token
        const userDetails = await User.findOne({token : token});

        // check token is valid
        if(!userDetails){
            return res.status(400).json({
                success : false,
                message : 'token is invalid'
            })
        }

        // check expiration time of token
        if(userDetails.resetPasswordExpires < Date.now()){
            return res.status(400).json({
                success : false,
                message : 'token is expired, please regenerate your token'
            })
        }

        // hash password
        let hashedPassword = await bcrypt.hash(password,10);

        // update password
        await User.findOneAndUpdate({token : token},{password:hashedPassword},{new : true});

        // return response
        return res.status(200).json({
            success : true,
            message : 'passwords reset successfully'
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success : false,
            message : 'Something Went Wrong!!! try again'
        })
    }
};