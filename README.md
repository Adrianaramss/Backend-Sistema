# 📖 Sobre o projeto
O projeto simula um sistema no qual o usuário realiza o seu cadastro, fornecendo informações como nome, e-mail e número de telefone. Posteriormente, o usuário realiza o login no sistema. O sistema inclui um painel administrativo, no qual o administrador pode acessar as informações do usuário utilizando o token associado a esse usuário.
Durante o cadastro, o usuário é solicitado a fornecer informações básicas, como nome completo, endereço de e-mail e número de telefone. Esses dados são utilizados para criar uma conta única para o usuário no sistema.


# 📝 Endpoints

- Post Signin (Login): Informe de Login e Senha para acesso a aplicação;
- Post Signup  (Cadastro): onde o usuario faz seu cadastro ;
- Get Admin : Onde o administrador pode recuperar informações sobre o usuario atráves do token.

# 💻 Tecnologias utilizadas no Projeto

- NodeJS
- Javascript
- Express
- SQL e SQLite
- UUID
- Postman
# 🛰 Demostração requisições 
## 🎯 REGISTRA UM USUÁRIO NO BANCO DE DADOS.

POST
```URL
'https://back-desafio.onrender.com/user/signup'
```
  
```JSON
[
  {
  "nome": "marcio",
  "email": "marcioscosta@gmail.com",
  "senha": "7589778857",
  "telefones": [
    {
      "numero": "785456789",
      "ddd": "11"
    }
  ]

```
Output
```JSON 
{
  "id": 5,
  "data_criacao": "2023-11-22T19:35:03.109Z",
  "data_atualizacao": "2023-11-22T19:35:03.109Z",
  "ultimo_login": "2023-11-22T19:35:03.109Z",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDA2ODE3MDMsImV4cCI6MTcwMDY4NTMwM30.3CViPbQw-Xxogg9cb1et-KJziifmEKNCbKE6JGOLMhs"
}
```

## 🎯 FAZ LOGIN

POST

```URL
https://back-desafio.onrender.com/user/signin
```

```JSON
{
 "email": "marcioscosta@gmail.com",
  "senha": "7589778857"
}
```
Output
```JSON 
{
  "id": 5,
  "data_criacao": "2023-11-22 19:35:03",
  "data_atualizacao": "2023-11-22 19:35:03",
  "ultimo_login": "2023-11-22 19:35:03",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJtYXJjaW9zY29zdGFAZ21haWwuY29tIiwiaWF0IjoxNzAwNjgxNzI3LCJleHAiOjE3MDA2ODUzMjd9.JeDUGAkgrMYKk8AowAjIwfKp0mlg2SzoDm954tXpULM"
}
```
## 🎯 ADM ACESSA INFORMAÇÕES DO USUÁRIO ATRÁVES DO TOKEN DO USUARIO

GET

```URL
https://back-desafio.onrender.com/admin
```
```JSON 
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJtYXJjaW9zY29zdGFAZ21haWwuY29tIiwiaWF0IjoxNzAwNjgxNzI3LCJleHAiOjE3MDA2ODUzMjd9.JeDUGAkgrMYKk8AowAjIwfKp0mlg2SzoDm954tXpULM"
}
```
Output
```JSON 
{
  "mensagem": "Usuário encontrado",
  "usuario": {
    "id": 5,
    "nome": "marcio",
    "email": "marcioscosta@gmail.com",
    "telefones": "[{\"numero\":\"785456789\",\"ddd\":\"11\"}]",
    "data_criacao": 1700681703109,
    "data_atualizacao": 1700681703109,
    "ultimo_login": 1700681703109,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDA2ODE3MDMsImV4cCI6MTcwMDY4NTMwM30.3CViPbQw-Xxogg9cb1et-KJziifmEKNCbKE6JGOLMhs"
  }
}
```
# 📖 Documentação Postman
https://documenter.getpostman.com/view/24460801/2s9YeBdZ7y

# 🔗Deploy   
https://back-desafio.onrender.com


# 🛰 Como executar o projeto 
```bash
# Instalando dependências
npm install

# estabelecer conexão com bancos de dados com 
npm run start
```
# 📫 Contato
E-mail - adrianascosta9@gmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adriana-ramss/)
