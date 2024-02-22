const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");
const checkRole = async (req, res, next) => {
  token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: "та эхлээд нэвтрэх хэрэгтэй" });
  }
  try {
    const data = jwt.verify(token, "bazraa");
    const userData = await UserModel.findOne({ where: { email: data.email } });
    console.log(!userData.role == "manager");
    if (userData.role !== "manager") {
      console.log("heel");
      return res
        .status(401)
        .json({ message: "энэ үйлдлийг хиихэд таны эрх хүрэхгүй байна" });
    }
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "таны токений хугцаа дуусан байна дахин нэвтэрн үү" });
  }
};

module.exports = checkRole;
