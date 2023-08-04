const userModel = require("../model/UserModel.js");
const passwordHash = require("../utils/passwordHash.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.test = (req, res) => {
  res.json({ success: true });
};

exports.signup = async (req, res) => {
  const { email, password, cpassword, username } = req.body;

  if (!email || !password || !cpassword || !username) {
    return res.status(400).send("Please Fill the Field");
  }

  try {
    // Check if user already exists
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res.status(400).send("User Already Exist");
    }

    // Create new user
    const hashedPassword = passwordHash(password);
    const newUser = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });

    // Get the role object for 'logged in'
    const role = await Role.findOne({ name: "logged in" });

    // Create user role document with user and role references
    await UserRole.create({ user_id: newUser._id, role_id: role._id });

    res.status(200).send("User Successfully Created");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.login = (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Please Fill Your Login Details");
  }

  userModel.findOne({ email: email }).then((exist) => {
    if (exist) {
      bcrypt.compare(password, exist.password).then((check) => {
        if (check) {
          const token = jwt.sign(exist.email, process.env.JWT_SECRET_KEY);
          res.status(200).send(token);
        } else {
          return res.status(400).send("Invalid User Credentials");
        }
      });
    } else {
      return res.status(400).send("User Does Not Exist");
    }
  });
};
