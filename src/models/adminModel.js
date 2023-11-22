const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/desafio.db');

function getUserById(userId, callback) {
  db.get('SELECT * FROM usuarios WHERE id = ?', [userId], callback);
}


module.exports = {
  getUserById,
};
