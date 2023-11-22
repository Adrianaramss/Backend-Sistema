const adminModel = require('../models/adminModel');
const bcrypt = require('bcrypt');

function getUserById(req, res) {
  const user = req.user;

  adminModel.getUserById(user.id, (err, userFromDB) => {
    if (err || !userFromDB) {
      return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    delete userFromDB.senha;

    res.json({ mensagem: 'Usuário encontrado', usuario: userFromDB });
  });
}

module.exports = {
  getUserById,
};
