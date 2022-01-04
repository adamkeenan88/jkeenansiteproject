require("dotenv").config();
const express = require("express");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("./config/mongoose.config.js");
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/user.routes")(app);
require("./routes/post.routes")(app);
app.listen(process.env.PORT, () => {
  console.log("express is fired up on", process.env.PORT);
});
