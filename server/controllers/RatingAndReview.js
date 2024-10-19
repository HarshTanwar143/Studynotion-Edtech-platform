const { default: mongoose } = require("mongoose");
const Course = require("../models/Course");
const RatingAndReview = require("../models/RatingAndReview");


// creating rating and review
exports.createRating = async (req,res) => {
    try{
        // fetch user id 
        const userId = req.user.id;
        
        // fetch data from req body
        const {rating,review,courseId} = req.body;

        // validation
        if(!rating && !review && !courseId){
            return res.status(400).json({
                success : false,
                message : 'Please, Provide all required information'
            });
        }
        // check if user is enrolled or not
        const courseDetails = await Course.findOne({
                                            _id : courseId,
                                            studentEnrolled : {$elemMatch : {$eq:userId}},
                                        });
     
        if(!courseDetails){
            return res.status(404).json({
                success : true,
                message : 'Student is not enrolled in this course',
            });
        }
    
        // check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({user : userId, course : courseId});
        if(alreadyReviewed){
            return res.json({
                success : false,
                message : 'Sorry!!! this user already reviewed this course'
            });
        }
    
        const newRatingReview = await RatingAndReview.create({
            user: userId,
            rating: rating,
            review: review,
            course: courseId
        });
        

        // update course with this rating and review
        const updateCourseDetail = await Course.findByIdAndUpdate(courseId,
            {$push:{ratingAndReview:newRatingReview._id}},
            {new:true}
        );


        console.log(updateCourseDetail);

        // return response
        res.status(200).json({
            success : true,
            message : 'Review and Rating created successfully!!!',
            newRatingReview
        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success : false,
            message : error.message,
        })
    }

}


// get average rating and review
exports.getAverageRating = async (req,res) => {
    try{
        // get course Id
        const courseId = req.body.courseId;

        // calculate average rating
        const result = await RatingAndReview.aggregate([
            {
                $match : {
                    course : new mongoose.Types.ObjectId(courseId),
                },
            },
            {
                $group : {
                    _id : null,
                    averageRating : {$avg : $rating},
                }
            }
        ]);

        // return rating
        if(result.length > 0){
            return res.status(200).json({
                success : true,
                averageRating : result[0].averageRating,
            });
        }

        // if no rating/review exist
        return res.status(200).json({
            success : true,
            message : 'Average rating is 0, No rating is given till now',
            averageRating : 0,
        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}


// get all ratings and reviews
exports.getAllRating = async (req,res) => {
    console.log('inside rating ')
    try{
        // fetch all reviews and rating 
        const allReviews = await RatingAndReview.find({})
                                    .sort({rating:-1})
                                    .populate(
                                        {
                                            path : "user",
                                            select : "firstName lastName email image",
                                        }
                                    )
                                    .populate(
                                        {
                                            path : "course",
                                            select : "courseName"
                                        }
                                    )
                                    .exec();


        // return response
        return res.status(200).json({
            success : true,
            message : "All reviews fetched successfully",
            data : allReviews,
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}