const { secretKey } = require("./config.js");
const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }
  const token = authHeader.split(" ")[1];

  try {
    const obj = jwt.verify(token, secretKey);
    req.user_id = obj.user_id; //here we are creating a new property in the request object which is user_id
    //and we can access this property in the next middleware or in the route handler its a common practice in authentication
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = authMiddleware;
