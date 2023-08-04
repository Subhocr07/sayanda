const userModel = require("../model/UserModel.js");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = userModel.findOne({ email: decodedToken });
    if (!user) {
      return res.status(401).json({ message: "Invalid authorization token" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
};

module.exports = auth;
