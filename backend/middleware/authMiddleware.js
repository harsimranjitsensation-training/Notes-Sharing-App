import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  try {
    if(!authHeader){
        res.status(400).json({
            message: "Token not found"
        })
    }
    const token = authHeader.split(" ")[1];
    if(!token){
        res.status(400).json({
            message: "Invalid token"
        })
    }
    const isVerified = jwt.verify(token, process.env.SECRET_KEY);
    if(!isVerified){
        res.status(400).json({
            message: "Token not verified"
        })
    }
    req.user = isVerified;
    next();
  } catch (error) {
    console.log(error);
  }
};
