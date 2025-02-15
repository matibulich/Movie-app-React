import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
 
  console.log("🛑 Auth Header recibido:", authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No se proporcionó un token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    console.log("✅ Middleware verifyToken ejecutado. Usuario:", req.user);

    next();
  } catch (error) {
    res.status(403).json({ message: "No estas logueado" });
  } 
};