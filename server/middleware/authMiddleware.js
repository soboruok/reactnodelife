//Authentification : make sure that we have the correct email and password
//Authorize : sending the righ token to the correct route

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      //getting the token from that bearer space token.
      //it will turn this into an array and split by the space.
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      //end of the middleWare. if somethign goes wrong then next()
      next();
    } catch (error) {
      console.log(error);
      res.status(401); //401 means not authorized.
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
