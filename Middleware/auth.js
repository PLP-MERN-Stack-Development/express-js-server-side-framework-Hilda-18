// Basic API key authentication
const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== '12345') {
    return res.status(403).json({ error: 'Access denied. Invalid or missing API key.' });
  }

  next();
};

module.exports = auth;
