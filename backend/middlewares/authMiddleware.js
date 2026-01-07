import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // 🔹 Missing token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Token missing",
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.admin_id = decoded.admin_id;
        req.admin_role = decoded.role;
        req.admin_status = decoded.status;
        req.scope = decoded.scope || null;

        next();
    } catch (error) {
        console.error("JWT ERROR:", error.message);

        // 🔹 Invalid / expired token
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};



export const isSuperadmin = (req, res, next) => {
  if (req.admin_role !== "superadmin") {
    return res.status(403).json({ message: "Access denied. Only superadmin allowed." });
  }
  next();
};


export const isRejectedAdmin = (req, res, next) => {
  if (req.admin_status !== "rejected") {
    return res.status(403).json({
      success: false,
      message: "Only rejected admins can perform this action",
    });
  }
  next();
};
