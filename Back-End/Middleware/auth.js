// We can use this to verify the authenticity of whatever is trying to use our backend
const isAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bot ')) {
      const token = authHeader.split(' ')[1];
      if (token === process.env.BOT_TOKEN) return next();
    }
    res.status(403).json({ error: "Unauthorized" });
  };
  

module.exports = isAdmin