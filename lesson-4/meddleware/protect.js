const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: "та эхлээд нэвтрэх хэрэгтэй" });
  }
  try {
    const data = jwt.verify(token, "bazraa");
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "таны токений хугцаа дуусан байна дахин нэвтэрн үү" });
  }
};

module.exports = protect;
