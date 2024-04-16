// auth.js in Controllers folder
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    // Extract the token from the "Bearer" scheme
    const tokenParts = token.split(' ');
    const tokenString = tokenParts[1]; // The token is the second part after splitting by space

    // Verify the token
    const decodedToken = jwt.verify(tokenString, 'newkyewuehh');

    // Set the user object in the request
    req.user = decodedToken;

    // Move to the next middleware
    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};

module.exports = auth;
