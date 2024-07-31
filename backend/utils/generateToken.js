import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  //token is created, now we have to set it up in the cookie

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevents XSS attacks cross-site scripting attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
