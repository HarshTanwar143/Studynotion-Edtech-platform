const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
const {mailSender} = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/template/passwordUpdate");
require("dotenv").config();



// Send OTP For Email Verification
exports.sendotp = async(req,res) => {
    try{
        // Fetch Email Rrom Request Body
        const {email} = req.body;

        // Check If User Already Exists
        const dbEmail = await User.findOne({email});

        // If Already Exists, Return a Responses
        if(dbEmail){
            return res.status(401).json({
                success : false,
                message : 'User already registered!!!'
            })
        }

        // generate OTP
        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        });

        console.log("generated OTP :: ",otp);

        // Check the genearated otp is unique (BAD CODE,bruteforce)
        let result = await OTP.findOne({otp});
        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            });

            result = await OTP.findOne({otp});
        }

        // Here, We have unique otp.Store it in OTP Model
        const otpPayload = {email,otp};
        const otpBody = await OTP.create(otpPayload);
        console.log('OTP Stored in Database : ',otpBody);

        res.status(200).json({
            success:true,
            message:'OTP Sent Successfully',
            otp,
        })
    }
    catch(error){
        console.error("Error Occurred! while sending OTP ",error);
        res.status(500).json({
            success : false,
            message : `Error occured while generating OTP!!! ${error.message}`
        })
    }
}

// Signup Controller for Registering Users
exports.signup = async (req,res) => {
    try{
        // VALIDTION
        // Fetch Data From Request Body
        const {firstName,lastName,email,password,confirmPassword,accountType,otp} = req.body;

        // user not filled all fields
        if(!firstName || !lastName || !email || !accountType || !password || !confirmPassword || !otp){
            console.log("Fill Up All Fields");
            return res.status(401).json({
                success:false,
                message: 'Please! fill all required details...'
            });
        }

        // Validate Both the Passwords are Same
        if(password !== confirmPassword){
            console.log("Passwords Not Match")
            return res.status(401).json({
                success:false,
                message:'Password not match',
            });
        }

        // Check User Already Exists or Not
        const checkEmail = await User.findOne({email});
        if(checkEmail){
            console.log("User Already Registered!!!");
            return res.status(401).json({
                success:false,
                message:'user already registered'
            });
        }

        // Find Most Recent OTP Stored For the User
        const recentOTP = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        
        // Validate OTP (Check Inserted OTP is correct)
        if(recentOTP.length === 0){
            return res.status(400).json({
                success : false,
                message : 'OTP Not Found'
            })
        }
        else if(recentOTP[0].otp !== otp){
            res.status(401).json({
                success : false,
                message : "OTP Not Matched!!!"
            })
        }

        console.log('recent OTP : ',recentOTP);
        console.log('recent[0] OTP :: ',recentOTP[0]);

        // Hash Password
        let HashedPassword = await bcrypt.hash(password,10);


        // Create a Dummy Entry For Profile Model
        const ProfileEntry = await Profile.create({
            gender : null,
            dob : null,
            about : null,
            phone : null
        })

        // Create Entry for new User
        const UserEntry = await User.create({
            firstName,
            lastName,
            email,
            password : HashedPassword,
            accountType,
            additionalDetails : ProfileEntry._id,
            image :  `https://api.dicebear.com/8.x/initials/svg?seed=${firstName} ${lastName}`
        })

        // return response
        return res.status(200).json({
            success : true,
            message : "User Successfully Registered",
            data : UserEntry
        })
    }
    catch(error){
        console.error("Error Occurred! while SignUp ",error);
        res.status(500).json({
            success : false,
            message : 'User Cannot Be Registered, Please Try Again'
        })
    }
}


// Login controller for authenticating users
exports.login = async (req,res) => {
    try{
        // fetch the data from request
        const {email,password} = req.body;

        // validation of data
        if(!email || !password){
            console.log('Required details not found');
            return res.status(400).json({
                success : false,
                message : 'Please Fill All Required Details'
            });
        }

        const userDetails = await User.findOne({email}).populate("additionalDetails");
        if(!userDetails){
            return res.status(401).json({
                success : false,
                message : 'user is not registered with us!!! please signUp to continue'
            });
        }

        // generate jwt token if password is valid
        if(await bcrypt.compare(password,userDetails.password)){
            const payloads = {
                email : userDetails.email,
                id : userDetails._id,
                accountType : userDetails.accountType
            };
    
            const token = jwt.sign(payloads,
                                    process.env.JWT_SECRET,
                                    {
                                        expiresIn : "2h",
                                    }
            );
            // userDetails = userDetails.toObject();
            userDetails.token = token;
            userDetails.password = undefined;
            

            // return response with cookie
            const options = {
                expires : new Date(Date.now() + 3*24*60*60*1000),
                httpOnly : true,
            };

            res.cookie("token",token,options).status(200).json({
                success : true,
                token,
                userDetails,
                message : 'User Successfully Logged-In',
            });
        }		
        else{
			return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
		}

    }
    catch(error){
        console.error('Failed in Login, ',error);
        res.status(500).json({
            success : false,
            message : 'User cannot be logged In,please try again'
        });
    }
}


// Controller for Changing Password
exports.changePassword = async (req, res) => {
    try {
        // Get user data from req.user
        const userDetails = await User.findById(req.user.id)
    
        // Get old password, new password, and confirm new password from req.body
        const { oldPassword, newPassword } = req.body
    
        // Validate old password
        const isPasswordMatch = await bcrypt.compare(
            oldPassword,
            userDetails.password
        )
        if (!isPasswordMatch) {
            // If old password does not match, return a 401 (Unauthorized) error
            return res
            .status(401)
            .json({ success: false, message: "The password is incorrect" })
        }
    
        // Update password
        const encryptedPassword = await bcrypt.hash(newPassword, 10)
        const updatedUserDetails = await User.findByIdAndUpdate(
            req.user.id,
            { password: encryptedPassword },
            { new: true }
        )
    
        // Send notification email
        try {
            const emailResponse = await mailSender(
            updatedUserDetails.email,
            "Password for your account has been updated",
            passwordUpdated(
                updatedUserDetails.email,
                `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
            )
            )
            console.log("Email sent successfully:", emailResponse.response)
        } catch (error) {
            // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
            console.error("Error occurred while sending email:", error)
            return res.status(500).json({
            success: false,
            message: "Error occurred while sending email",
            error: error.message,
            })
        }
    
        // Return success response
        return res
            .status(200)
            .json({ success: true, message: "Password updated successfully" })
    } catch (error) {
        // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
        console.error("Error occurred while updating password:", error)
        return res.status(500).json({
            success: false,
            message: "Error occurred while updating password",
            error: error.message,
        })
    }
}




















