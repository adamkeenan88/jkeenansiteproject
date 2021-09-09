const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// console.log(bcrypt.compareSync("password", "hsdlfjklasdjljaklgfuj9r"));

// NOTE the async declaration before the function. in order to use await you MUST put async before the function
const register = async (req, res, next) => {
  // pull body off of req
  const { body } = req;

  // Try catch blocks is the accepted best practice way to deal with async/await
  // The code inside the try{} will attempt to execute. If there is an error, it will go to the catch{} block
  try {
    // use await to run User.findOne, which will look in our db collection for a doc with email.
    // We use await instead of the .then() and .catch() syntax you have seen
    // async/await can be used with any function that returns a promise. We "wait" for the promise to resolve or reject
    const queriedUser = await User.findOne({ email: body.email });
    // if a user is found with this email, we must notify the client so the user can enter a different email address
    // this is the basics of registration... an email can only be used by one user
    if (queriedUser) {
      // return next(new Error("Email already in use"));
      res.status(400).json({ error: "Email already in use" });
      // THis line below helps us exit out of the route without saving to db
      return;

      // return;
      // next("EMail already in use");
    }
  } catch (err) {
    res.status(400).json(err);
  }
  // create new User instance
  const newUser = new User(body);
  // At this point in the code, the mongoose "pre" steps start
  // Try catch blocks is the accepted best practice way to deal with async/await
  // The code inside the try{} will attempt to execute. If there is an error, it will go to the catch{} block
  try {
    const newUserObj = await newUser.save();
    res.json(newUserObj);
  } catch (error) {
    res.status(400).json(error);
  }
  // *** THE ABOVE CODE IS THE SAME AS BELOW!
  // newUser
  //   .save()
  //   .then((newUserObj) => {
  //     console.log("newuserobj", newUserObj);
  //     res.json(newUserObj);
  //   })
  //   .catch((err) => {
  //     console.log("ERROR BLOCK");
  //     res.status(400).json(err);
  //   });
};

const login = async (req, res) => {
  const { body } = req;

  // Look for user trying to log in by email
  let userQuery;
  try {
    userQuery = await User.findOne({ email: body.email });
  } catch (err) {
    res.status(400).json(err);
  }
  // If query is null, the user was not found! So send client error message
  if (userQuery === null) {
    res.status(400).json({ err: "email not found" });
    return;
  }
  // Getting here means the user was found.
  // Next step is to check if the user entered login form password is same as hashed password from db
  // compareSync function returns true or false
  const passwordCheck = bcrypt.compareSync(body.password, userQuery.password);
  // if passwordCheck is false...
  if (!passwordCheck) {
    res.status(400).json({ error: "email and password do not match" });
    return;
  }
  // Getting to this block of code means 1. the email was found in db and
  // 2. the password the user entered is correct
  // So, we now need to create the token and send it to client as cookie
  // create JWT. jwt.sign will take a value like the mongoID and a secret key and
  // will create a long, encrypted token
  const userToken = jwt.sign({ id: userQuery._id }, process.env.SECRET_KEY);
  console.log("token:", userToken); // will print some insanely long, random string

  // 1st arg to .cookie: the name of the cookie that the client will store, here 'usertoken'
  // 2nd arg to .cookie: the token itself
  // 3rd arg to .cookie: the secret key
  // 4th arg: options - expires sets an expiration for the token so the client will become unauthorized after however long we enter
  res
    .cookie("usertoken", userToken, process.env.SECRET_KEY, {
      httpOnly: true,
      expires: new Date(Date.now() + 9000000),
    })
    // Also send json messages
    .json({ message: "success" });
};

const logout = (req, res) => {
  res.clearCookie("usertoken");
  res.json({ message: "logout successful" });
};

module.exports = {
  register,
  login,
  logout,
};
