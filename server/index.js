// importing pakages
const express = require("express");
const app = express();

// importing all routes
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");
const paymentRoutes = require("./routes/Payments");
// const contactUsRoute = require("./routes/Contact");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000;

// database connection
database.DB_connect();
// cloudinary connection
cloudinaryConnect();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000", "https://your-frontend-url.vercel.app"],         // FE will entertain by BE, this will ensure it...
    credentials:true,
}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp",
}));

// Mount the routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/payment",paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);


// default route
app.get('/',(req,res) => {
    return res.json({
        success : true,
        message : 'Your server is up and running...',
    });
});

// listening app
app.listen(PORT,() => {
    console.log(`app is running at ${PORT}`);
});
