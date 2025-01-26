const jwt = require('jsonwebtoken');

// Middleware to check token and role
const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
      const decoded = jwt.verify(token, 'your_jwt_secret');
      req.user = decoded;

      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ msg: 'Access denied' });
      }

      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }const jwt = require('jsonwebtoken');

    // Middleware to check token and role
    const authMiddleware = (roles = []) => {
      return (req, res, next) => {
        const authHeader = req.header('Authorization');
        console.log('Received Header:', authHeader);
    
        if (!authHeader) {
          return res.status(401).json({ msg: 'No token, authorization denied' });
        }
    
        const token = authHeader.startsWith('Bearer ') 
          ? authHeader.slice(7) 
          : authHeader;
    
        console.log('Extracted Token:', token);
    
        try {
          const decoded = jwt.verify(token, 'your_jwt_secret');
          console.log('Decoded Token:', decoded);
          
          req.user = decoded;
    
          if (roles.length && !roles.includes(req.user.role)) {
            return res.status(403).json({ msg: 'Access denied' });
          }
    
          next();
        } catch (err) {
          console.error('Token Verification Error:', err.message);
          res.status(401).json({ msg: 'Token is not valid', error: err.message });
        }
      };
    };
    
    module.exports = authMiddleware;
  };
};

module.exports = authMiddleware;
