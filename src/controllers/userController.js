const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { format } = require('date-fns'); 

function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

function generateToken() {
  const secretKey = 'suaChaveSecreta'; 
  return jwt.sign({}, secretKey, { expiresIn: '1h' });
}
async function signup(req, res) {
  const { nome, email, senha, telefones } = req.body;

  try {
    const senhaHashed = hashPassword(senha);

    const user = await userModel.getUserByEmail(email);

    if (user) {
      return res.status(400).json({ mensagem: 'E-mail já existente' });
    }

    const dataCriacao = new Date();
    const dataAtualizacao = new Date();
    const ultimoLogin = dataCriacao;
    const token = generateToken();
    const userId = await userModel.createUser(
      nome,
      email,
      senhaHashed,
      JSON.stringify(telefones),
      dataCriacao,
      dataAtualizacao,
      ultimoLogin,
      token
    );
    
    res.status(201).json({
      id: userId,
      data_criacao: dataCriacao,
      data_atualizacao: dataAtualizacao,
      ultimo_login: ultimoLogin,
      token,
    });
    
  
  } catch (error) {
    console.error('Erro geral no cadastro de usuário:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}

async function signin(req, res) {
  try {
    const { email, senha } = req.body;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ mensagem: 'Usuário e/ou senha inválidos' });
    }

    const senhaCorreta = await bcrypt.compare(senha, user.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ mensagem: 'Usuário e/ou senha inválidos' });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      'suaChaveSecreta', 
      { expiresIn: '1h' }
    );

    res.json({
      
      id: user.id,
      data_criacao: format(new Date(user.data_criacao), 'yyyy-MM-dd HH:mm:ss'),
      data_atualizacao: format(new Date(user.data_atualizacao), 'yyyy-MM-dd HH:mm:ss'),
      ultimo_login: format(new Date(user.ultimo_login), 'yyyy-MM-dd HH:mm:ss'),
      token: token,
      

    });
  } catch (error) {
    console.error('Erro geral no signin de usuário:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}

module.exports = {
  signup,
  signin,
};
