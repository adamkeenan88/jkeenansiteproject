const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  console.log(req.cookies);
  console.log("key", process.env.SECRET_KEY);
  jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      // 401 status code is unauthorized
      res.status(401).json({ verified: false });
    } else {
      console.log("user is authenticated");
      next();
    }
  });
};

module.exports = {
  authenticate,
};
