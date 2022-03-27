const User = require("../models/User");

const checkDuplicateEmail = async (req, res, next) => {
  const email = await User.findOne({ email: req.body.email });
  if (email)
    return res.status(400).json({ message: "The email already exist" });

  next();
};

const verifySignup = {
  checkDuplicateEmail,
};

module.exports = verifySignup;
