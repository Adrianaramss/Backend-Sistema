const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/desafio.db');

function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM usuarios WHERE email = ?', [email], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function createUser(
  nome,
  email,
  senha,
  telefones,
  dataCriacao,
  dataAtualizacao,
  ultimoLogin,
  token
) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO usuarios (nome, email, senha, telefones, data_criacao, data_atualizacao, ultimo_login, token) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [nome, email, senha, telefones, dataCriacao, dataAtualizacao, ultimoLogin, token],
      function (err) {
        if (err) {
          reject(err);
        }

        const userId = this.lastID;
        resolve(userId);
      }
    );
  });
}

module.exports = {
  getUserByEmail,
  createUser,
};
