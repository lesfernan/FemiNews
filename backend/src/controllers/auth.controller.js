const User = require("../models/User");

const signUp = async (req, res) => {
  const { name, lastname, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save();

  res.status(200).json({ savedUser });
};

const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email });

  if (!userFound) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ message: "Invalid password" });

  res.status(200).json({ userFound });
};

const findUser = async(req, res) => {
    const userFound = await User.findById(req.body.userId)
    res.status(200).json({userFound})
}

const allUsers = async(req,res) => {
  const users = await User.find()
  res.status(200).json({users})
}

const deleteUser = async(req,res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id)
  res.status(200).json({deletedUser})
}

const authCtrl = {
  signIn,
  signUp,
  findUser,
  allUsers,
  deleteUser
};

module.exports = authCtrl;
