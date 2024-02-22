const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
exports.Register = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    let userData = await UserModel.create({
      username: username,
      password: password,
      email: email,
      role: role,
    });
    res.status(200).json({
      data: userData,
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};

exports.Login = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      res.status(200).json({ message: "майл эсвэл нууц үг буруу байна" });
    }
    let check = user.CheckPassword(password);
    if (!check) {
      res.status(200).json({ message: "майл эсвэл нууц үг буруу байна" });
    }
    let token = jwt.sign({ email: user.email }, "bazraa", { expiresIn: "1d" });
    res.cookie("token", token);
    res.status(200).json({
      message: "амжилтай нэвтэрлээ",
      token,
    });
  } catch (error) {}
};
