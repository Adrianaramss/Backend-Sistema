const jwt = require('jsonwebtoken');
const secretKey = 'suaChaveSecreta'; 

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ mensagem: 'Não autorizado' });

  jwt.verify(token.replace('Bearer ', ''), secretKey, (err, user) => {
    if (err) return res.status(401).json({ mensagem: 'Token inválido' });

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
