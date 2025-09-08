import jwt from "jsonwebtoken";
const secret = "13253mjbnmbcvbnvcxur76547e3";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(401).send("Access Denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send("Invalid Token.");
  }
};

export default authenticate;
