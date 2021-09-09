// this is what we need to call to have our .env file work
require("dotenv").config();
// this is how we access our environment variables found in .env file
// console.log(process.env.SECRET_KEY);
// console.log(process.env.PORT);
const express = require("express");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("./config/mongoose.config");
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/user.routes")(app);
require("./routes/post.routes")(app);
require("./routes/comment.routes")(app);
app.listen(process.env.PORT, () => {
  console.log("express is fired up on", process.env.PORT);
});
