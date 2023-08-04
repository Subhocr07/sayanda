const User = require("../models/userModel.js");

exports.authSucess = async (req, res) => {
  if (req.user) {
    try {
      const { id, name, email } = req.user;
      const user = await User.findOneAndUpdate(
        { googleId: id },
        { username: name, email },
        { upsert: true, new: true }
      );
      res.status(200).json({
        error: false,
        message: "Successfully Logged In",
        user,
      });
    } catch (error) {
      res.status(500).json({ error: true, message: error.message });
    }
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
};

exports.authGoogleCallback = (req, res) => {
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })(req, res);
};

exports.authFailedRoute = (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
};
exports.authLogou = (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};
