const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User", 
        required : true
    },
    rating : {
        type : Number,
        required : true,
    },
    review : {
        type : String,
        required : true,
    },
    course : {
        type: mongoose.Schema.Types.ObjectId,
        requied : true,
        ref : "Course",
        index : true,
    }
});

module.exports = mongoose.model("RatingAndReview",RatingSchema);