import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try{
    const token = req.headers.authorization?.split(" ")[1]; // Expecting
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided, authorization denied",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }catch(error) {
        console.error("Authentication error:", error.message);
        res.status(401).json({
            success: false,
            message: "Invalid or expired token, authorization denied",
        });
    }
};


//to authorize

export const authorize = (...roles) => {
    return (req, res, next) => {
        if(!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "You do not have permission to perform this action",
            });
        }
        next();
    };
};