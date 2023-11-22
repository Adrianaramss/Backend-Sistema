-- Active: 1700515703491@@127.0.0.1@3306
CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  senha TEXT NOT NULL,
  telefones TEXT,
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  ultimo_login DATETIME,
  token TEXT
);

DROP TABLE usuarios;


INSERT INTO usuarios (nome, email, senha, telefones, ultimo_login)
VALUES ('João', 'joao@email.com', 'senha123', '[{"numero":"123456789", "ddd":"11"}]', CURRENT_TIMESTAMP);

SELECT *FROM usuarios;

