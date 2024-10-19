const mongoose = require("mongoose");
require("dotenv").config();

exports.DB_connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Database Connected Successfully!!!"))
    .catch((e) => {
        console.error(e);
        console.log("Database Connection Failed");
        process.exit(1);
    })
}