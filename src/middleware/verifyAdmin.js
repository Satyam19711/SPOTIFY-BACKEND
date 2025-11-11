const verifyAdmin = (req, res, next) => {
  try {
    const keyFromClient = req.headers["x-admin-key"];
    const correctKey = process.env.ADMIN_SECRET_KEY;

    if (!keyFromClient || keyFromClient !== correctKey) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized: Invalid Admin Key" });
    }

    next(); // ✅ allow request to continue
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error in auth" });
  }
};

module.exports = verifyAdmin;
